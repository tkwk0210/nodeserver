function route(pathnamen, handle, res){
    console.log('Routing request for ' + pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname](res);
    }
    else{
        console.log('No hendler for '+ pathname);
        let sBody = '404 Not Found';
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write(sBody);
        res.end();
    }
}

exports.route = route;