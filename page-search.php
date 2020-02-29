<?php get_header(); ?>

<!-- ↓検索フォーム -->
<article class="search-area">

    <div class="subtitle">
        <img src="<?php echo get_template_directory_uri(); ?>/img/人物/boy-4.png" alt="男性">
        <h1><span class="marker-animation">検索する</span></h1>
        <img src="<?php echo get_template_directory_uri(); ?>/img/人物/girl-4.png" alt="女性">
    </div>

    <div class="search-part">
        <form method="get" action="#" class="search_container">
            <input type="text" size="25" placeholder="キーワード検索">
            <!-- <input type="submit" value="&#xf002;" > -->
            <button type="submit">
                <i class="fas fa-search search-icon"></i>
            </button>       
        </form>
        <div class="search-ranking">
                <h2>検索人気ワード</h2>
            <div class="search-ranking-part">           
                <i class="fas fa-crown"></i>
                <p>1位</p>
                <a href="results.html">女性弁護士</a>
            </div>
            <div class="search-ranking-part">
                <i class="fas fa-crown"></i>
                <p>2位</p>
                <a href="results.html">初回相談無料</a>
            </div>
            <div class="search-ranking-part">
                <i class="fas fa-crown"></i>
                <p>3位</p>
                <a href="results.html">駅から近い</a>
            </div>
        </div>
    </div>

      
</article>
<!-- ↑検索フォーム -->




<?php get_footer();?>