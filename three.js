// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

function findMedianSortedArrays(nums1, nums2){
    let ans;
    const arr = [...nums1, ...nums2].sort((a, b) => a - b);
    console.log(arr)
    const mid = arr.length / 2;
    console.log(mid)

    if(Number.isInteger(mid)){

        ans = (arr[mid-1] + arr[mid]) / 2;
        return ans;
    }
    ans = arr[Math.floor(mid)];
    return ans;
}
console.log(findMedianSortedArrays([1,3], [2]))