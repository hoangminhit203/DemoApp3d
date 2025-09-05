import React, { useCallback, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

/**
 * LayeredCardStack
 * Swipe RIGHT  -> tạo (push) card mới (nếu có getNextCard)
 * Swipe LEFT   -> quay lại card trước (pop) nếu còn >1
 *
 * Props:
 *  - initialCards: mảng khởi tạo (ít nhất 1 phần tử)
 *  - renderCard(item, index): render UI của card
 *  - getNextCard?(lastItem, newIndex): tạo card mới khi push. Trả null nếu không còn -> sẽ không push nữa.
 *  - onIndexChange?(idx): callback khi đổi index
 *  - threshold?: px cần để kích hoạt (default 90)
 *  - springConfig?: tinh chỉnh animation về 0
 *
 * Lý do tách riêng thay vì sửa file LayeredCard cũ: giữ backward compatibility & tránh phá UI nơi khác đang dùng.
 */

export interface LayeredCardStackProps<T> {
    initialCards: T[];
    renderCard: (item: T, index: number) => React.ReactNode;
    getNextCard?: (last: T, newIndex: number) => T | null;
    onIndexChange?: (index: number) => void;
    threshold?: number;
    springConfig?: Parameters<typeof withSpring>[1];
    allowBack?: boolean; // mặc định true
}

export function LayeredCardStack<T>(props: LayeredCardStackProps<T>) {
    const {
        initialCards,
        renderCard,
        getNextCard,
        onIndexChange,
        threshold = 90,
        springConfig,
        allowBack = true,
    } = props;

    const [stack, setStack] = useState<T[]>(() => (initialCards.length ? initialCards : ([] as T[])));

    // shared values
    const translateX = useSharedValue(0);
    const animating = useSharedValue(false);
    const width = useSharedValue(Dimensions.get('window').width);

    const topIndex = stack.length - 1;
    const topItem = stack[topIndex];
    const prevItem = stack[topIndex - 1];

    const setIndexJS = useCallback((idx: number) => {
        onIndexChange && onIndexChange(idx);
    }, [onIndexChange]);

    const pushCard = useCallback(() => {
        if (!getNextCard) return; // không tạo mới nếu không truyền hàm
        const last = stack[stack.length - 1];
        const next = getNextCard(last, stack.length);
        if (next == null) return; // hết dữ liệu
        setStack(s => [...s, next]);
        setIndexJS(stack.length); // new top index
    }, [getNextCard, stack, setIndexJS]);

    const popCard = useCallback(() => {
        setStack(s => {
            if (s.length <= 1) return s; // không pop nữa
            const clone = [...s];
            clone.pop();
            const newTop = clone.length - 1;
            runOnJS(setIndexJS)(newTop);
            return clone;
        });
    }, [setIndexJS]);

    // Gesture
    const pan = Gesture.Pan()
        .onUpdate(e => {
            if (animating.value) return;
            translateX.value = e.translationX;
        })
        .onEnd(e => {
            if (animating.value) return;
            const x = translateX.value;
            const vx = e.velocityX;
            // PUSH (swipe phải)
            if ((x > threshold || vx > 800) && getNextCard) {
                animating.value = true;
                // animate current card ra khỏi màn hình bên phải
                translateX.value = withTiming(width.value, { duration: 180 }, () => {
                    runOnJS(pushCard)();
                    // reset vị trí cho card mới hiện ra
                    translateX.value = 0;
                    animating.value = false;
                });
                return;
            }
            // POP (swipe trái)
            if ((x < -threshold || vx < -800) && allowBack && stack.length > 1) {
                animating.value = true;
                translateX.value = withTiming(-width.value, { duration: 180 }, () => {
                    runOnJS(popCard)();
                    translateX.value = 0;
                    animating.value = false;
                });
                return;
            }
            // trở về
            translateX.value = withSpring(0, springConfig);
        });

    // style card top
    const topStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    // style card dưới (card trước) — trồi lên khi kéo trái để quay lại
    const underStyle = useAnimatedStyle(() => {
        // progress khi kéo trái vượt 0 tới -threshold
        const prog = Math.min(Math.max(-translateX.value / threshold, 0), 1);
        return {
            transform: [
                { scale: 0.95 + 0.05 * prog },
                { translateY: 12 - 12 * prog },
            ],
            opacity: 0.55 + 0.45 * prog,
        };
    });

    const onLayoutWrap = (e: any) => {
        width.value = e.nativeEvent.layout.width;
    };

    return (
        <View style={styles.wrap} onLayout={onLayoutWrap}>
            {/* previous card (nếu có) */}
            {prevItem != null && (
                <Animated.View pointerEvents="none" style={[styles.shadowCard, styles.cardPrev, underStyle]}>
                    {renderCard(prevItem, topIndex - 1)}
                </Animated.View>
            )}
            {/* top card */}
            <GestureDetector gesture={pan}>
                <Animated.View style={[styles.mainCard, topStyle]}>
                    {renderCard(topItem, topIndex)}
                </Animated.View>
            </GestureDetector>
        </View>
    );
}

// Re-export simple LayeredCard cũ nếu cần dùng chung
export { default as LayeredCard } from './LayeredCard';

const RADIUS = 14;
const styles = StyleSheet.create({
    wrap: {
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 24,
    },
    mainCard: {
        backgroundColor: '#fff',
        borderRadius: RADIUS,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
    },
    shadowCard: {
        position: 'absolute',
        left: 0,
        right: 0,
        borderRadius: RADIUS,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
    },
    cardPrev: { top: 10 },
});

export default LayeredCardStack;

/*
USAGE EXAMPLE:

<LayeredCardStack
  initialCards={[products[0]]}
  getNextCard={(last, newIndex) => products[newIndex] ?? null}
  renderCard={(item) => (
    <View>
      <Text style={{ fontWeight: '600', fontSize: 18 }}>{item.name}</Text>
      <Text>{item.brand}</Text>
    </View>
  )}
  onIndexChange={(i) => console.log('Top index:', i)}
/>

- Swipe RIGHT: nếu còn sản phẩm -> thêm card mới
- Swipe LEFT: quay về card trước
*/
