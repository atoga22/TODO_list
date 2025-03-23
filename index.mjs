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
        alert()
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