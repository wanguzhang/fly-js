class Util {
    static dynamicLoad (arrJs, callback = function () { }) {
        arrJs.forEach((item, index) => {
            var script = document.createElement("script")
            script.type = "text/javascript";
            if (script.readyState) { //IE
                script.onreadystatechange = function () {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        if (index === arrJs.length) {
                            callback();
                        }
                    }
                };
            } else { //Others
                script.onload = function () {
                    if (index === arrJs.length) {
                        callback();
                    }
                };
            }
            script.src = item;
            document.body.appendChild(script);
        });
    }
}
