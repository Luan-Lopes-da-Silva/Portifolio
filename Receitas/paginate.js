function pagination (page, total, limit){
let pageSize = Math.ceil(total/limit);
let_pagination = {
    page: page,
    total: total,
    limit: limit,
    pages: pageSize   
};

if(page > 1){
 let prev = page-1;
 _pagination.previous = prev;    
} 

let remaining = total - (page * limit);

if(remaining > 0) {
 _pagination.next = page+1;   
}
return_pagination;
}



let list = '.item';
let pageQuery = 1;
let page = parseInt(pageQuery) || 1;
let limit = 10 ; 
let offset = (page - 1) * limit;
let total = list.length;
let items = list.slice(offset, offset+limit);

//console.log(items);
