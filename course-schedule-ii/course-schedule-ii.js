/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    if(numCourses === 1 && !prerequisites.length) {
        return [0]
    };
    
    const map = prepareCourseMap(numCourses, prerequisites);
    const queue = [];
    const order = [];
    
    const begin = findCourseWithoutDeps(map);
    
    if(begin === undefined) {
        return order;
    }
    
    queue.push(begin);
    
    while(queue.length) {
        const course = queue.shift();
        order.push(course);
        
        removeCourseMap(map, course);
        
        const newCourse = findCourseWithoutDeps(map);
        
        if(newCourse !== undefined) {
            queue.push(newCourse);
        }
    }
    
    return order.length === numCourses ? order : [];
};



function prepareCourseMap(numCourses, prerequisites) {
    const map = {};
    
    for(let i = 0; i < numCourses; i++) {
        map[i] = [];
    }
    
    prerequisites.forEach((item) => {
        const [main, dep] = item;
        
       map[main].push(dep); 
    });
    
    return map;
}


function findCourseWithoutDeps(coursesMap) {
   const key = Object.keys(coursesMap).find((i) => !coursesMap[i].length);
   delete coursesMap[key];
    
    return key;
}

function removeCourseFromDeps(deps, course) {
    const index = deps.findIndex((dep) => +dep === +course );
    
    if (index === -1) {
        return;
    }
    
    deps.splice(index, 1);
}

function removeCourseMap(map, course) {
    Object.values(map).forEach((deps) => removeCourseFromDeps(deps, course));
}
