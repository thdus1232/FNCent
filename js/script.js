$(function() { 
    // artist banner list
    let roller = document.querySelector('.list ul');
    roller.id = 'roller1'; 

    let clone = roller.cloneNode(true)
    clone.id = 'roller2';
    document.querySelector('.list').appendChild(clone);

    document.querySelector('#roller1').style.left = '0px';
    document.querySelector('#roller2').style.left = document.querySelector('.list ul').offsetWidth + 'px';

    roller.classList.add('original');
    clone.classList.add('clone');
    // artist banner list end


    // newrel
    let $titNames = $("#titname>li");
    let $alimg = $(".alimg");

    $titNames.on("mouseover", function(){
        let $this = $(this);

            $this.css({
                fontWeight:"700",
                textDecoration: "underline"
            })
            .siblings().css({
                textDecoration: "none",
                fontWeight:"400"
            });

        let targetId = $this.data("target");
            
        $alimg.css("display", "none")
                .filter(targetId).css("display", "block");
    });

});

// 메뉴 안사라지고 그대로 있는거 원해.
// 클릭하면 되는거 해야겠다.

// $(function() { 
//     // 0. 요소 탐색 및 변수 선언
//     // 1. #nav 하위 요소인 a 요소를 클릭했을 때
//     // 2. 클릭한 요소의 드롭 다운 메뉴가 숨겨진 상태면
//     // 3. 보여지고 있는 드롭 다운 메뉴를 숨기고
//     // 4. 클릭한 요소의 드롭 다운 메뉴를 보이도록 한다.
//     // 5. 클릭한 요소의 드롭 다운 메뉴가 보여지는 상태이면
//     // 6. 클릭한 요소의 드롭 다운 메뉴를 숨긴다.
//     //------------------------------------------------------------
//     // 0. 요소 탐색 및 변수 선언
//     let $subMenus = $(".sub");
//     let duration = 200;
//     // 1. #nav 하위 요소인 a 요소를 클릭했을 때
//     $("#nav > ul > li > a").on("click", function() { 
//         // 클릭한 요소의 드롭 다운 메뉴
//         let $sub = $(this).show(".sub");

//         if(!$sub.length) return;

//         /*
//         // 2. 클릭한 요소의 드롭 다운 메뉴가 숨겨진 상태면
//         if($dropdown.is(":hidden")) {
//             // 3. 보여지고 있는 드롭 다운 메뉴를 숨기고
//             $dropdownMenus.filter(":visible").slideUp();
//             // 4. 클릭한 요소의 드롭 다운 메뉴를 보이도록 한다.
//             $dropdown.slideDown();
//         }
//         // 5. 클릭한 요소의 드롭 다운 메뉴가 보여지는 상태이면
//         else {
//             // 6. 클릭한 요소의 드롭 다운 메뉴를 숨긴다.
//             $dropdown.slideUp();
//         }
//         */

//         if($sub.is(":hidden")) {
//             $subMenus.filter(":visible").slideUp(duration);
//         }
        
//         $sub.slideToggle(duration);

//     });
// });
// var bigPic = document.querySelector(".big");
// var smallPics = document.querySelectorAll(".small");

// for(var i = 0 ; i < smallPics.length; i++ ){
//     smallPics[i].addEventListener("mouseover", changepic);
// }
// function changepic(){
//     var smallPicAttribute = this.getAttribute("src");
//     bigPic.setAttribute("src", smallPicAttribute);

// }
