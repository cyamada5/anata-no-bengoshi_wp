<?php get_header(); ?>

<!-- review -->


<article class="review-area">

    <div class="subtitle">
        <img src="<?php echo get_template_directory_uri(); ?>/img/人物/boy-3.png" alt="男性">
        <h1><span class="marker-animation">クチコミを投稿する</span></h1>
        <img src="<?php echo get_template_directory_uri(); ?>/img/人物/girl-3.png" alt="女性">
    </div>

    <form action="#" method="POST">

        <h2>投稿者情報</h2>
            <div class="review-section">
                <label class="review-label" for="">投稿者名<span> ※入力必須</span></label>
                <input type="text" name="送信時の名前" class="review-item" placeholder="例) クチコミ君" autofocus required>
            </div>

            <div class="review-section">
                <label class="review-label" for="category-item">依頼内容<span> ※入力必須</span></label class="review-label">
                <select name="" id="category-item"  autofocus required>
                    <option value="" selected>カテゴリを選択</option>
                    <option value="離婚">離婚</option>
                    <option value="インターネット">インターネット</option>
                    <option value="交通事故">交通事故</option>
                    <option value="不動産">不動産</option>
                    <option value="国際">国際</option>
                    <option value="医療">医療</option>
                    <option value="民事">民事</option>
                    <option value="相続">相続</option>
                    <option value="労働">労働</option>
                    <option value="刑事">刑事</option>
                </select>
            </div>

        <h2>弁護士情報</h2>
            <div class="review-section">
                <label class="review-label" for="">弁護士氏名<span> ※入力必須</span></label class="review-label">
                <input type="text" name="弁護士の名前" placeholder="例) 佐藤太郎" autofocus required>
            </div>
            <div class="review-section">
                <label class="review-label" for="pref">都道府県<span> ※入力必須</span></label class="review-label">
                <select name="prefecture" id="pref"  autofocus required>
                    <option value="" selected>都道府県を選択</option>
                    <option value="北海道">北海道</option>
                    <option value="青森県">青森県</option>
                    <option value="岩手県">岩手県</option>
                    <option value="宮城県">宮城県</option>
                    <option value="秋田県">秋田県</option>
                    <option value="山形県">山形県</option>
                    <option value="福島県">福島県</option>
                    <option value="茨城県">茨城県</option>
                    <option value="栃木県">栃木県</option>
                    <option value="群馬県">群馬県</option>
                    <option value="埼玉県">埼玉県</option>
                    <option value="千葉県">千葉県</option>
                    <option value="東京都">東京都</option>
                    <option value="神奈川県">神奈川県</option>
                    <option value="新潟県">新潟県</option>
                    <option value="富山県">富山県</option>
                    <option value="石川県">石川県</option>
                    <option value="福井県">福井県</option>
                    <option value="山梨県">山梨県</option>
                    <option value="長野県">長野県</option>
                    <option value="岐阜県">岐阜県</option>
                    <option value="静岡県">静岡県</option>
                    <option value="愛知県">愛知県</option>
                    <option value="三重県">三重県</option>
                    <option value="滋賀県">滋賀県</option>
                    <option value="京都府">京都府</option>
                    <option value="大阪府">大阪府</option>
                    <option value="兵庫県">兵庫県</option>
                    <option value="奈良県">奈良県</option>
                    <option value="和歌山県">和歌山県</option>
                    <option value="鳥取県">鳥取県</option>
                    <option value="島根県">島根県</option>
                    <option value="岡山県">岡山県</option>
                    <option value="広島県">広島県</option>
                    <option value="山口県">山口県</option>
                    <option value="徳島県">徳島県</option>
                    <option value="香川県">香川県</option>
                    <option value="愛媛県">愛媛県</option>
                    <option value="高知県">高知県</option>
                    <option value="福岡県">福岡県</option>
                    <option value="佐賀県">佐賀県</option>
                    <option value="長崎県">長崎県</option>
                    <option value="熊本県">熊本県</option>
                    <option value="大分県">大分県</option>
                    <option value="宮崎県">宮崎県</option>
                    <option value="鹿児島県">鹿児島県</option>
                    <option value="沖縄県">沖縄県</option>
                </select>
            </div>


        <h2>評価</h2>
            <div class="review-section">
                <label class="review-label" for="">総合評価<span> ※入力必須</span></label class="review-label">
                <select name="" id=""  autofocus required>
                    <option value="" selected>評価を選択</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                    <option value="4">★★★★</option>
                    <option value="5">★★★★★</option>
                </select>
            </div>
            <div class="review-section">
                <label class="review-label" for="" >クチコミのタイトル<span> ※入力必須</span></label class="review-label" >
                <textarea name="" id="" cols="50" rows="1" placeholder="例) こちらの疑問に優しく答えてくれた" autofocus required></textarea>
            </div>
            <div class="review-section">
                <label class="review-label" for="">詳細コメント</label class="review-label">
                <textarea name="" id="" cols="50" rows="10" placeholder="ご自由にお書きください"></textarea>
            </div>
            <div class="review-section">
                <label class="review-label" for="">費用</label class="review-label">
                <input type="text" name="費用" placeholder="例) １５０万円＋実費">
            </div>  



            <div class="review-section">
                <p>その他</p>
                <ul class="other-group">
                    <li>
                        <input type="checkbox" name="other-1" value="夜間対応可" id="other-1">
                        <label for="other-1">夜間対応可</label>
                    </li>
                    <li>
                        <input type="checkbox" name="other-2" value="休日対応可" id="other-2">
                        <label for="other-2">休日対応可</label>
                    </li>
                    <li>
                        <input type="checkbox" name="other-3" value="出張対応可" id="other-3">
                        <label for="other-3">出張対応可</label>
                    </li>
                    <li>
                        <input type="checkbox" name="other-4" value="カード支払い可" id="other-4">
                        <label for="other-4">カード支払い可</label>
                    </li>
                    <li>
                        <input type="checkbox" name="other-5" value="分割払い可" id="other-5">
                        <label for="other-5">分割払い可</label>
                    </li>
                    <li>
                        <input type="checkbox" name="other-6" value="後払い可" id="other-6">
                        <label for="other-6">後払い可</label>
                    </li>
                    <li>
                        <input type="checkbox" name="other-7" value="女性弁護士" id="other-7">
                        <label for="other-7">女性弁護士</label>
                    </li>
                    <li>
                        <input type="checkbox" name="other-8" value="男性弁護士" id="other-8">
                        <label for="other-8">男性弁護士</label>
                    </li>
                    <li>
                        <input type="checkbox" name="other-9" value="初回相談無料" id="other-9">
                        <label for="other-9">初回相談無料</label>
                    </li>

                </ul>
            </div>

        <p><input type="submit" name="投稿" value="投稿" class="submit-btn"></p>
    </form>

</article>
<!-- review -->

<?php get_footer();?>