
# [2,3,5,6,8]
# key=9
# start=3
# end=4
def search(source: list, key: int) -> int:
    start = 0
    end = len(source) - 1

    while abs(start - end) >= 1:
        mid = abs(start + end) // 2
        # 3
        if key == source[mid]:
            return mid

        if key > source[mid]:
            start = mid + 1

        if key < source[mid]:
            end = mid - 1

    return -1