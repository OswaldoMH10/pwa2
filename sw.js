self.addEventListener(
    'fetch', 
    function(evento) {
        if (/\.jpg$/.test(evento.request.url)) {
            evento.respondWith( fetch('unicorn.jpg'));
        }
        else if(/\.png$/.test(evento.request.url)) {
            evento.respondWith( 
                fetch('cat.jpg')
            );
        }
    }
);