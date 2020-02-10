let app = new Vue({  //vueインスタンス生成
    el: '#app',　//id="app"が属性として使用されているタグ内で使える。(マウント)
    data: {
        comment: "",
        rate: 0,
        comments: [],
        sun: 0,
        length: false,  //使いたい変数達

    },
    methods: {  //各メソッドを格納。htmlを見てもらえると「v-on:click="メソッド名"」と記述されているところが複数箇所ありますが要素をクリックした際に下記のメソッドを実行するという意味です。
        submit: function () {
            if (this.comment == "") return;
            if (this.comment.length > 100) return;
            let commentItem = {
                comment: this.comment,
                rate: this.rate
            }
            this.comments.unshift(commentItem);
            this.sun = this.sun + Number(commentItem.rate)
            this.comment = ""
            this.rate = 0
            if (this.comments.length > 0) {
                this.length = true
            }
        },
        deleteItem: function (index) {
            this.sun = this.sun - Number(this.comments[index].rate);
            this.comments.splice(index, 1);
            if (this.comments.length < 1) {
                this.length = false
            }
        },
        sortUp:function(){
            let arr =  this.comments;
            arr.sort(function(a,b){
                if (a.rate > b.rate) return 1;
                if (a.rate < b.rate) return -1;
                return 0;
            })
            this.comments = arr;
        },
        sort:function(){
            let arr =  this.comments;
            arr.sort(function(a,b){
                if (a.rate > b.rate) return -1;
                if (a.rate < b.rate) return 1;
                return 0;
            })
            this.comments = arr;
        },



    },
    computed:{  //算出プロパティと言います。変数averageScoreをhtml側で呼び出すと
//自動的に関数内の処理を実行してくれます。他にも監視プロパティというものもありますが監視プロパティに比べて
//処理結果をキャッシュしてくれるというのが大きな特徴です。
        averageScore:function(){
            return (this.sun/this.comments.length).toFixed(2)
        }

    }

})