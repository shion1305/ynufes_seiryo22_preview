<template>
  <div class="body">
    <div class="wrapper">
      <img class="background_img" src="@/assets/background_img.png" alt=""/>

      <div class="body-frame">
        <div class="content-frame">
          <div class="events_block">
            <div class="event_widget">
              <img :src="$store.getters.entities.imgLocation"/>
              <div class="type">Web展示</div>
              <div class="meta_area">
                <h2>
                  {{ $store.getters.entities.eventName }}
                </h2>
                <hr>
                <div class="org_name">
                  {{ $store.getters.entities.orgName }}
                </div>
              </div>
            </div>
            <div class="event_widget">
              <img src="@/assets/sample_icon_1.png"/>
              <div class="type">Web展示</div>
              <div class="meta_area">
                <h2>
                  テスト企画名テスト1
                </h2>
                <hr>
                <div class="org_name">
                  企画テスト団体
                </div>
              </div>
            </div>
            <div class="event_widget">
              <img src="@/assets/sample_icon_2.png"/>
              <div class="type">Web展示</div>
              <div class="meta_area">
                <h2>
                  企画名テストイベント
                </h2>
                <hr>
                <div class="org_name">
                  企画名テスト団体
                </div>
              </div>
            </div>
            <div class="event_widget">
              <img src="@/assets/sample_icon_3.png"/>
              <div class="type">Web展示</div>
              <div class="meta_area">
                <h2>
                  企画名テストイベント
                </h2>
                <hr>
                <div class="org_name">
                  企画テスト団体
                </div>
              </div>
            </div>
            <div class="event_widget">
              <img src="@/assets/sample_icon_4.png"/>
              <div class="type">Web展示</div>
              <div class="meta_area">
                <h2>
                  テストイベント名
                </h2>
                <hr>
                <div class="org_name">
                  テストイベント団体
                </div>
              </div>
            </div>
            <div class="event_widget">
              <img src="@/assets/sample_icon_5.png"/>
              <div class="type">Web展示</div>
              <div class="meta_area">
                <h2>企画テストイベント</h2>
                <hr>
                <div class="org_name">
                  企画テストイベントダミー団体
                </div>
              </div>
            </div>

          </div>
        </div>

        <footer>
          <div class="footer_wrapper">
            <nav class="sitemap">
              <ul>
                <li><a>清陵祭について</a></li>
                <li><a>更新情報</a></li>
                <li><a>企画を探す</a></li>
                <li><a>ご協賛について</a></li>
                <li><a>Q&A</a></li>
                <li><a>相互リンク</a></li>
              </ul>
            </nav>
            <div class="footer_org">
              <div class="logos_area">
                <img src="https://ynu-fes.yokohama/wp-content/uploads/2020/02/cropped-YNUFES-%E3%83%AD%E3%82%B4.jpg"
                     alt="YNUFES logo"/>
                <div class="sns">
                  <a><img class="hover-to-shrink" src="@/assets/twitter_logo.png" alt="twitter"/></a>
                  <a><img class="hover-to-shrink" src="@/assets/instagram_logo.png" alt="instagram"/></a>
                  <a><img class="hover-to-shrink" src="@/assets/facebook_logo.png" alt="facebook"/></a>
                </div>
              </div>
              <div class="organ_area">
                <div>
                  <h3>横浜国立大学<br>大学祭実行委員会</h3>
                  〒240-0067<br>神奈川県横浜市保土ヶ谷区常盤台79-1
                  <br>文化サークル棟1F
                  <br>大学祭実行委員会室
                  <br> ynu.fes.c☆gmail.com
                  <br> ※☆を＠に変えてメールをお送りください。
                </div>
              </div>
            </div>
          </div>
          <div style="font-size: 0.8rem; padding-top:1rem">Copyright &#169;2022 横浜国立大学 大学祭実行委員会</div>
        </footer>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Preview2"
}
</script>

<style lang="scss" scoped>


.conditions_block {
  max-width: 70rem;
  width: 100%;
  background: #de31aa;
  height: 10rem;
}

.events_block {
  box-sizing: border-box;
  justify-content: center;
  gap: 0.5rem;
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  max-width: 70rem;
  width: 100%;

  .event_widget {
    border-radius: 1rem;
    width: 12rem;
    background: #ffffff66;
    position: relative;
    text-overflow: ellipsis;

    .type {
      color: white;
      position: absolute;
      top: 10.8rem;
      margin: 0.3rem;
      background: #de31aa;
      border-radius: 1rem;
      padding: 0.2rem;
    }

    > img {
      border-top-right-radius: 1rem;
      border-top-left-radius: 1rem;
      width: 100%;
    }

    > .meta_area {
      margin: 1.2rem 1rem;

      h2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        max-height: 2.8rem;
        overflow: hidden;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        font-size: 1.2rem;
        line-height: 1.4rem;
        padding: 0;
        margin: 0;
      }
    }

    > hr {
      margin: 0;
      padding: 0;
    }

    .tag_area {
      margin-top: 0.3rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.2rem;

      > div {
        font-size: 0.8rem;
        color: white;
        padding: 0.3rem;
        border-radius: 0.6rem;
        background: #de31aa;
        white-space: nowrap;
      }
    }
  }
}

//COMMON_SCSS_STARTS_HERE
.wrapper {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Serif JP', serif;
}

.background_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  z-index: -10;
}

.hover-to-shrink {
  //animation-delay: 0.02s;
  transition: all 0.1s linear;
}

.hover-to-shrink:hover {
  transform: scale(0.9);
}


.body-frame {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: clip;
  min-height: calc(100vh - 360px);
  box-sizing: border-box;
  padding-bottom: 220px;

  * {
    z-index: 10;
  }

  .content-frame {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 140px - 220px);
  }
}


.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 20%;
  left: 0;
  background-color: white;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}


footer {
  position: absolute; /*←絶対位置*/
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  color: white;
  background: #131516;
  width: 100%;
  z-index: 50;

  .footer_wrapper {
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .sitemap {
    flex-basis: 30%;
    font-size: 1.2rem;
    margin: 1rem 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > ul {
      margin: auto;
    }
  }

  .footer_org {
    flex-basis: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


    .logos_area {
      margin: 1rem 0 0 2rem;
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;

      > img {
        margin-left: 0.3rem;
        width: 10rem;
        border-radius: 10px;
      }

      .sns {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;

        img {
          height: 3rem;
          @media screen and (max-width: 470px) {
            height: 2rem;
          }
        }
      }


      @media screen and (max-width: 470px) {
        flex-direction: column;
        margin-left: 0;
        .sns {
          flex-direction: row;
        }
        > img {
          width: 9rem;
        }
      }
      @media screen and (max-width: 470px) {
        > img {
          margin-bottom: 1rem;
          width: 7rem;
        }
      }
    }

    .organ_area {
      margin-top: 10px;
      font-size: 0.9rem;
      margin-left: 3rem;

      h3 {
        padding: 0;
        margin: 0;
        font-size: 1.2rem;
        line-height: 1.1;
      }

      @media screen and (max-width: 70rem) {
        margin-left: 1rem;
        font-size: 0.7rem;
      }
      @media screen and (max-width: 400px) {

        h3 {
          font-size: 18px;
        }
        margin-left: 0.5rem;
        font-size: 10px;
        line-height: 1.2;
      }
    }
  }
}

@media screen and (max-width: 670px) {
  .body-frame {
    padding-top: 80px;
    min-height: calc(100vh - 80px - 220px);
  }
  .footer_org {
    flex-basis: auto;
  }

  nav.sitemap {
    display: none;
  }

  footer .footer_org {
    flex-basis: auto;
  }
}

/* COMMON AREA ENDS HERE */
.icon_title_block {
  display: flex;
  flex-direction: row;

  .icon_area {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }

  .icon {
    width: 15rem;
    height: auto;
    object-fit: contain;
    border-radius: 1rem;
  }

  .space_between_icon_title {
    width: 2rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    .space_between_icon_title {
      display: none;
    }
  }
}


.title_block {
  margin-top: 10px;

  .title {
    font-size: 3rem;
    margin: 0;
    padding: 0;
    min-height: 3rem;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
    right: 0;
  }

  .organization_name {
    font-size: 1.5rem;
  }

  .tag_frame {
    display: flex;
    flex-wrap: wrap;
    font-size: 1rem;
    gap: 5px 5px;
    box-sizing: border-box;

    .tag {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-content: center;
      height: 2rem;
      padding: 0.2rem 0.7rem;
      border-radius: 20px;
      background: #99999999;

      p {
        padding: 0;
        margin: auto;
      }
    }
  }
}

.pdf_area {
  width: 100%;
  height: 500px;
}

.detail_block {
  h1 {
    width: 100%;
  }

  white-space: pre-wrap;
  box-sizing: border-box;
  width: 100%;
  font-size: large;
}

.top_area {
}

.content-block {
  box-sizing: border-box;
  width: 100%;
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  background: #f2f2f288;
  padding: 5rem 5rem;
  margin: 1rem;
  border-radius: 0.4rem;
  @media screen and (max-width: 768px) {
    padding: 0.5rem 0.5rem;
  }
}
</style>