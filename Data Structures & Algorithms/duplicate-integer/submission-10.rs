use std::collections::HashSet;

impl Solution {
    pub fn has_duplicate(nums: Vec<i32>) -> bool {
        // Collect the vector elements into a HashSet to remove duplicates
        let nums_set: HashSet<&i32> = nums.iter().collect();
        
        // If the set length equals the vector length, there are no duplicates
        if nums_set.len() == nums.len() {
            return false;
        }
        
        true
    }
}
