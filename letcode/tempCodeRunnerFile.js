const merge = (nums1, m, nums2, n) => {
    let currentIndex = m + n -1;
    let nums1Index = m-1;
    let nums2Index = n-1;

    while (nums2Index >= 0) {
        if (nums1[nums1Index] >= nums2[nums2Index]) {
            nums1[currentIndex] = nums1[nums1Index] 
            nums1Index--
        } else {
            nums1[currentIndex] = nums2[nums2Index]
        }

        currentIndex --
    }

    return nums1
}

console.log(merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3))
