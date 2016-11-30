/**
 * Created by mac on 16/11/30.
 */

// (function () {
//
//
//     ReactDOM.render(
//         <h1>hello world</h1>,
//         document.querySelector("#root")
//     );
//
// })();

(function () {

    let tf = num => `${num >= 10 ? "" : "0"}${num}`;

    let time = "00:00:00";

    setInterval(()=>{
        let date = new Date();
        time = `${tf(date.getHours())}:${tf(date.getMinutes())}:${tf(date.getSeconds())}`;
        ReactDOM.render(<h1>{time}</h1>,document.querySelector("#root"));
    },1000);

})();