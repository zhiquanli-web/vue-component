import { Ref } from 'vue';
import { IMoveListItem } from './types';

const HS_PREFIX_ITEM = 'sy_prefix_item_'; // 单个选项类名前缀

interface IProps {
  showIcon?: boolean; // 是否展示右侧按钮
  modelValue: string | number; // 双向绑定的值
  rightBtnWidth?: number; // 右侧按钮宽度
  itemWidth?: number; // 单个 item 的宽度
}
interface IEmit {
  (evt: 'update:modelValue', ...args: any[]): void;
}
export function useMoveList(prop: IProps, emit: IEmit, list: Ref<IMoveListItem[]>) {
  let countItem = 0; // 展示的选项个数
  let suffix = 0; // countItem 取整后的剩余小数
  let halfCount = 0; // 可展示列表个数的等分值
  let maxOffsetWidth = 0; // 列表最大偏移长度

  const syMoveListBoxRef = ref<HTMLDivElement>(); // 列表父级dom
  const syListRef = ref<HTMLUListElement>(); // 列表dom

  // 列表移动距离计算
  const moveDistance = (curItem: Record<string, any>) => {
    emit('update:modelValue', curItem!.value);
    let offset_distance = 0; // 偏移距离
    // 偏移距离 = [[当前item位置(index+1) - 可展示列表个数的等分值] * 单个选项宽度(ITEM_WIDTH)] - [单个选项宽度(ITEM_WIDTH) / 2]
    offset_distance = (curItem!.index + 1 - halfCount - 0.5) * prop.itemWidth!;
    offset_distance =
      offset_distance <= 0
        ? 0
        : offset_distance >= maxOffsetWidth
        ? maxOffsetWidth
        : offset_distance;
    syListRef.value!.style.transform = `translateX(-${offset_distance}px)`;
  };
  // 计算展示选项个数及保存小数点后面的数值
  function resizeFn() {
    const num =
      (prop.showIcon
        ? syMoveListBoxRef.value!.offsetWidth - prop.rightBtnWidth!
        : syMoveListBoxRef.value!.offsetWidth) / prop.itemWidth!;
    halfCount = num / 2;
    countItem = Math.ceil(num); // 向上取整
    const numArr = num.toString().split('.');
    numArr[0] = '0';
    suffix = parseFloat(numArr.join('.'));
    maxOffsetWidth = (list.value.length - countItem + 1 - suffix) * prop.itemWidth!;
    if (list.value.length > 0) {
      const actItem = list.value.find((item) => item.value === prop.modelValue);
      actItem && moveDistance(actItem);
    }
  }
  watch(
    list,
    () => {
      if (list.value[0]) {
        emit('update:modelValue', list.value[0].value);
        nextTick(() => {
          resizeFn();
          moveDistance(list.value[0]);
        });
      }
    },
    { deep: true, immediate: true }
  );
  watch(
    () => prop.modelValue,
    () => {
      const curItem = list.value.find((item) => item.value === prop.modelValue); // 当前项
      moveDistance(curItem as Record<string, any>);
    }
  );
  onMounted(() => {
    addEventListener('resize', resizeFn);
  });
  onUnmounted(() => {
    removeEventListener('resize', resizeFn);
  });
  return {
    syListRef,
    syMoveListBoxRef,
    HS_PREFIX_ITEM,
    moveDistance
  };
}
