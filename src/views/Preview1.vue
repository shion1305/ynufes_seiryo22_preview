<template>
  <div class="body">
    <div class="wrapper">
      <img class="background_img" src="@/assets/background_img.png" alt=""/>
      <div class="body-frame">
        <div class="content-frame">
          <div class="content-block">
            <div class="top_area">
              <div class="icon_title_block">
                <div class="icon_area">
                  <img
                      :src="$store.getters.entities.imgLocation"
                      class="icon"
                      alt="icon"
                  />
                </div>
                <div class="space_between_icon_title"></div>
                <div class="title_block">
                  <div class="title">
                    {{ $store.getters.entities.eventName }}
                  </div>
                  <hr/>
                  <div class="organization_name">{{ $store.getters.entities.orgName.replaceAll('\n', 'br') }}</div>
                  <div class="tag_frame">
                    <div class="tag"><p>Web展示(PDF)</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="detail_block">
              <h1>企画説明</h1>
              {{ $store.getters.entities.eventDescription }}
            </div>
            <!--                <iframe width="560" height="315" src="https://www.youtube.com/embed/QN2cO2l8XGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
            <h3 style="text-align: center">(リンク(WEB展示)の場合についてはプレビュー未対応です。)</h3>
            <h3 style="text-align: center">(↓Youtube(WEB展示)の場合)</h3>
            <div class="youtube_area">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/S-s4LtLFQEo"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
            </div>
            <h3 style="text-align: center">(↓PDF(Web展示)の場合)</h3>
            <iframe src="/test_pdf.pdf" class="pdf_area"></iframe>
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
                <img
                    src="https://ynu-fes.yokohama/wp-content/uploads/2020/02/cropped-YNUFES-%E3%83%AD%E3%82%B4.jpg"
                    alt="YNUFES logo"
                />
                <div class="sns">
                  <a
                  ><img
                      class="hover-to-shrink"
                      src="@/assets/twitter_logo.png"
                      alt="twitter"
                  /></a>
                  <a
                  ><img
                      class="hover-to-shrink"
                      src="@/assets/instagram_logo.png"
                      alt="instagram"
                  /></a>
                  <a
                  ><img
                      class="hover-to-shrink"
                      src="@/assets/facebook_logo.png"
                      alt="facebook"
                  /></a>
                </div>
              </div>
              <div class="organ_area">
                <div>
                  <h3>横浜国立大学<br/>大学祭実行委員会</h3>
                  〒240-0067<br/>神奈川県横浜市保土ヶ谷区常盤台79-1
                  <br/>文化サークル棟1F <br/>大学祭実行委員会室 <br/>
                  ynu.fes.c☆gmail.com <br/>
                  ※☆を＠に変えてメールをお送りください。
                </div>
              </div>
            </div>
          </div>
          <div style="font-size: 0.8rem; padding-top: 1rem">
            Copyright &#169;2022 横浜国立大学 大学祭実行委員会
          </div>
        </footer>
      </div>
      <!--        ここまで-->
    </div>
  </div>
</template>
<style lang="scss" scoped>
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

.youtube_area {
  position: relative;
  width: 100%; /*横幅いっぱいにwidthを指定*/
  height: 0; /*高さはpaddingで指定するため0*/
  padding-top: 56.25%; /*高さを指定（padding-bottomでも同様)*/
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.detail_block {
  h1 {
    width: 100%;
  }
  padding-bottom: 5rem;
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

<script>
export default {
  name: "EventDetail",
};
</script>
