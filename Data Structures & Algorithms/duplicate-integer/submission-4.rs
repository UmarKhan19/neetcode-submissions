impl Solution {
    pub fn has_duplicate(nums: Vec<i32>) -> bool {
        let array_length = nums.len();
        
        for i in 0..array_length {
            for y in 0..array_length {
                if i == y {
                    continue;
                }
                if nums[i] == nums[y] {
                    return true;
                }
            }
        }
        
        false
    }
}