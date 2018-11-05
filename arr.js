/**
 *  ...
 *  展开运算符,每个元素都一个个的迭代并取出来变成单独的被使用。
 *  可以用于合并数组
 *  与解构配合赋值
 */
// 合并数组
let arr1 = [1,2,3];
let a = 4;
console.log([...arr1,a]); //新的数组 [1,2,3,4]
//解构配合赋值
let [var1, ...arr5] = [1, 2, 3, 4, 5, 6]
console.log(var1) //1
console.log(arr5) // [2, 3, 4, 5, 6]

/**
 * splice()和slice()的区别
 * splice操作原数组
 * slice截取返回新的数组，不会改变原数组
 */