<?php

// メッセージを保存するファイルのパス設定
// define( 'FILENAME', './message.txt');

if( !empty($_POST['投稿']) ) {
	
	if( $file_handle = fopen( FILENAME, "a") ) {

;
	
		// 書き込むデータを作成
        $data = "'".$_POST['投稿者名']."','".$_POST['依頼内容']."','".$_POST['弁護士の名前']."','".$_POST['prefecture']."','".$_POST['総合評価']."','".$_POST['クチコミのタイトル']."','".$_POST['詳細コメント']."','".$_POST['']."'\n";
        

        $post = array(
            'post_title' => ".$_POST['投稿者名']."
    
            
            
		// 書き込み
		fwrite( $file_handle, $data);
	
		// ファイルを閉じる
		fclose( $file_handle);
    }	

    if (isset($_POST['投稿'])) {
        //送信ボタンがクリックされた場合
        echo "投稿ボタンがクリックされました。";
      } else {
        //送信ボタンがクリックされていない（ファイルを直接開いた）場合
        echo "投稿ボタンはクリックされていません。";
    }
}
?>

<?php get_header(); ?>


    <!-- results -->
    <article class="results-area">

        <div class="subtitle">
            <img src="<?php echo get_template_directory_uri(); ?>/img/人物/boy-1.png" alt="男性">
            <h1><span class="marker-animation">○○のクチコミ</span></h1>
            <img src="<?php echo get_template_directory_uri(); ?>/img/人物/girl-6.png" alt="女性">
        </div>




<?php if(have_posts()): while(have_posts()): the_post(); ?>

         <div class="results-section">
            <div class="reviewer">
                <img src="<?php echo get_template_directory_uri(); ?>/img/人物/boy-2.png" alt="男性">
                <h4 class="review-name">よっぴー</h4>
            </div>
            <div class="main-result-part">
                <h1>山田太郎<span>弁護士</span></h1>

                <div class="star-part">
                    <p class="star">★★★★</p>
                    <p>4.0</p>
                </div>
                <div class="comment">
                 
                    <h3><?php the_title(); ?></h3>
                    <p>
                        幼時から父は、私によく、金閣のことを語った。私の生まれたのは、舞鶴から東北の、日本海へ突き出たうらさびしい岬である。父の故郷はそこではなく、舞鶴東郊の志楽である。懇望されて、僧籍に入り、辺鄙な岬の寺の住職になり、その地で妻をもらって、私という子を設けた。
                    </p>
                </div>  
                <div class="price">
                    <p>費用 :</p>
                    <p>１００万円</p>
                </div>

                <h2>刑事事件</h2>
                <h2>埼玉県</h2>

                <div class="tag">
                    <i class="fas fa-tag"></i>
                    <p>分割払い可</p>
                    <p>休日対応可</p>
                </div>
            </div>

        </div> 

<?php endwhile; endif; ?>

        
    </article>



<?php get_footer();?>
