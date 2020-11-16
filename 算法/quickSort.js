 //  随机选中一个数字, 将小于这个数的元素放在左边，将大于这个数的元素放在右边。
 var arr = [3,3,-5,6,0,2,-1,-1,3];
  
 function myQuickSort(arr, left, right ) { 
   // 基准值
   var key = arr[left]
   var i = left;
   var j = right;
   if (left >=right) {
     return 
   }
   debugger
   while(i < j) {
     while(arr[j] > key && i < j) { // 从右边找到比标定点小的
       j--
     }
     while(arr[i] <= key && i < j) { // 从左边找到比标定点大的; 疑问 为什么是<= ?
       i++
     }      
     if (i < j) {// 交换 
       var temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
     } 
   }
   arr[left] = arr[i] // 这个arr[i] 一定是小于 key的?
   arr[i] = key
   myQuickSort(arr, left, i-1) // 对左边进行再排序
   myQuickSort(arr, i+1, right) // 对右边进行再排序
 }

 myQuickSort(arr, 0, arr.length - 1)
 console.log(arr)

 // 边界情况的处理?
  
  
  
  
  
  /**
	 * Swap the elements indexed by `x` and `y` in the array `ary`.
	 *
	 * @param {Array} ary
	 *        The array.
	 * @param {Number} x
	 *        The index of the first item.
	 * @param {Number} y
	 *        The index of the second item.
	 */
	function swap(ary, x, y) {
	  var temp = ary[x];
	  ary[x] = ary[y];
	  ary[y] = temp;
	}

	/**
	 * Returns a random integer within the range `low .. high` inclusive.（包含包括）
	 *
	 * @param {Number} low
	 *        The lower bound on the range.
	 * @param {Number} high
	 *        The upper bound on the range.
	 */
	function randomIntInRange(low, high) { // 随机取 low 到 high其中的一位数
	  return Math.round(low + Math.random() * (high - low));
	}

	/**
	 * The Quick Sort algorithm.
	 *
	 * @param {Array} ary
	 *        An array to sort.
	 * @param {function} comparator
	 *        Function to use to compare two items.
	 * @param {Number} p
	 *        Start index of the array
	 * @param {Number} r
	 *        End index of the array
	 */
	function doQuickSort(ary, comparator, p, r) {
	  // If our lower bound is less than our upper bound, we (1) partition the
	  // array into two pieces and (2) recurse on each half. If it is not, this is
	  // the empty array and our base case.

	  if (p < r) {
	    // (1) Partitioning.
	    //
	    // The partitioning chooses a pivot between `p` and `r` and moves all
	    // elements that are less than or equal to the pivot to the before it, and
	    // all the elements that are greater than it after it. The effect is that
	    // once partition is done, the pivot is in the exact place it will be when
	    // the array is put in sorted order, and it will not need to be moved
	    // again. This runs in O(n) time.

	    // Always choose a random pivot so that an input array which is reverse
	    // sorted does not cause O(n^2) running time.
	    var pivotIndex = randomIntInRange(p, r);
	    var i = p - 1;

	    swap(ary, pivotIndex, r);
	    var pivot = ary[r];

	    // Immediately after `j` is incremented in this loop, the following hold
	    // true:
	    //
	    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
	    //
	    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
	    for (var j = p; j < r; j++) {
	      if (comparator(ary[j], pivot) <= 0) {
	        i += 1;
	        swap(ary, i, j);
	      }
	    }

	    swap(ary, i + 1, j);
	    var q = i + 1;

	    // (2) Recurse on each half.

	    doQuickSort(ary, comparator, p, q - 1);
	    doQuickSort(ary, comparator, q + 1, r);
	  }
	}

	/**
	 * Sort the given array in-place with the given comparator function.
	 *
	 * @param {Array} ary
	 *        An array to sort.
	 * @param {function} comparator
	 *        Function to use to compare two items.
	 */
	exports.quickSort = function (ary, comparator) {
	  doQuickSort(ary, comparator, 0, ary.length - 1);
  };
  

 