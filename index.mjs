console.log('JavaScriptファイルが読み込まれました');

const onClickAdd = () => {
    //テキストボックスの値を取得して初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value="";

    //以下でリストの要素を生成する記述　li div p button
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";
    
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = inputText;

    const completeButton = document.createElement("button");
    completeButton.innerText="完了";
    completeButton.addEventListener("click", ()=>{
        //押された完了ボタンの親にあるliタグ配下の完了ボタンと削除ボタンを削除
        const moveTarget = completeButton.closest("li"); // //押された完了ボタンの親にある一番近いliタグを取得 closestで一番近い〇〇　
        completeButton.nextElementSibling.remove();  //削除ボタンの削除　　　next~はコンプリートボタンの次に来る要素を取得＝削除ボタンが対象
        completeButton.remove(); //完了ボタン自身を削除
        //戻すボタンを生成して押されたボタン親のli（moveTarget）配下に設定
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        moveTarget.firstElementChild.appendChild(backButton); //戻すボタンを子要素追加　　first~で一番最初の子要素　　　つまりli（moveTarget）の最初の子要素　→divタグ
        //完了リストに移動 liタグまるごと移動
        document.getElementById("complete-list").appendChild(moveTarget);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText="削除";
    deleteButton.addEventListener("click", ()=>{
        //押された削除ボタンの親にあるliタグを未完了リストから削除 closestで一番近い〇〇　
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    });

    // li タグの子要素を設定　　li > div > p ・ button  の階層
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    
    //未完了リストへ追加　　incomplete-listは html側でulタグ　に指定　その子要素に上で作ったliを指定
    document.getElementById("incomplete-list").appendChild(li);

}

document.getElementById("add-button").addEventListener("click",onClickAdd);