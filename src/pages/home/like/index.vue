<template>
  <div class="like">
    <div class="py-container">
      <div class="title">
        <h3 class="fl">猜你喜欢</h3>
        <a href="javascript:;" class="fr tip changeBnt">换一换</a>
      </div>
      <div class="bd">
        <ul class="favourate">
          <li>
            <img src="./images/like_02.png" alt="" />
            <div class="like-text">
              <p>九成新宿舍小功率用锅（桂7自提）</p>
              <h3>¥27.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/like_03.png" alt="" />
            <div class="like-text">
              <p>全新全自动开合雨伞（可送货上门）</p>
              <h3>¥39.90</h3>
            </div>
          </li>
          <li>
            <img src="./images/like_04.png" alt="" />
            <div class="like-text">
              <p>闲置Canon佳能200d二代照相机</p>
              <h3>¥2899.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/like_01.png" alt="" />
            <div class="like-text">
              <p>阳光美包新款单肩包女包时尚女</p>
              <h3>¥118.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/like_05.png" alt="" />
            <div class="like-text">
              <p>一盆旺盛的小多肉</p>
              <h3>¥16.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/like_06.png" alt="" />
            <div class="like-text">
              <p>八成新SONY索尼头戴式耳机</p>
              <h3>¥1799.00</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style scoped lang="less">
  .like {
        margin-top: 15px;

        .py-container {
            width: 1200px;
            margin: 0 auto;

            .title {
                overflow: hidden;

                .fl {
                    float: left;
                    font-size: 20px;
                    line-height: 30px;
                }

                .fr {
                    float: right;
                    background-image: url(./images/icons.png);
                    width: 66px;
                    height: 25px;
                    background-position: 182px -104px;
                    line-height: 30px;
                    font-size: 12px;
                    font-weight: 400;
                    color: #666;
                    text-decoration: none;
                }
            }

            .bd {
                .favourate {
                    border: 1px solid #e4e4e4;
                    overflow: hidden;
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: flex;

                    li {
                        height: 250px;
                        margin: 0 -1px;
                        overflow: hidden;
                        background: #fff;
                        position: relative;
                        width: 16.667%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        cursor: pointer;

                        img {
                            width: 142px;
                            height: 142px;
                            transition: all 400ms;

                            &:hover {
                                opacity: 0.8;
                                transform: scale(1.1)
                            }
                        }

                        .like-text {
                            padding: 0;
                            width: 142px;
                            border-right: 1px solid #e4e4e4;

                            p {
                                margin: 5px 0;
                            }

                            h3 {
                                color: #58aadd;
                                font-size: 20px;
                                line-height: 30px;
                                margin: 9px 0;
                                font-weight: 700;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
