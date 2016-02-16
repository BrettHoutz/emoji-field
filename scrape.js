// Code for scraping the emoji one site for its data.

// <textarea id="output" cols="200" rows="50"></textarea>

var out = $("#output");
for(var child of $("#emoji-gallery").children()){
  var title = child.childNodes[0].getAttribute('data-title');
  var unicode = child.childNodes[0].getAttribute('data-unicode');
  out.append('{"title": "'+title+'", "unicode": "'+unicode+'"},\n');
}
