import React from "react";
import "./card.css";
function BusinessCard() {
  return (
    <>
      <div class="container">
        <div class="display">
          <div class="display-item">
            <span>Static</span>
            <div class="business-card">
              <div class="profile">
                <div class="profile-image"></div>
                <div class="profile-title">
                  <h2>Walter Habadasher</h2>
                  <h3>Simzo Entertainment</h3>
                  <span>Laundry Massager</span>
                </div>
              </div>
              <div class="info">
                <div class="info-contact">
                  <span>
                    <i class="fa fa-phone"></i> +45 58 58 58 58
                  </span>
                  <span>
                    <i class="fa fa-at"></i> whab@simzo.com
                  </span>
                  <span>
                    <i class="fa fa-facebook"></i>{" "}
                    <a href="/">Walter Habadasher</a>
                  </span>
                </div>
                <div class="info-bio">
                  <p>
                    Nulla facilisi. Morbi in mauris ipsum. Etiam ut justo vel
                    elit eleifend mattis eget eget arcu.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="display-item">
            <span>Flippable (Hover)</span>
            <div class="flippable-business-card">
              <div class="front">
                <div class="front-top">
                  <div class="profile-image"></div>
                </div>
                <div class="front-bottom">
                  <div>
                    <h2>Simone Lickbait</h2>
                    <h3>Philistine Productions</h3>
                    <span>Fascism Foiler</span>
                  </div>
                  <div>
                    <div>
                      <span>
                        <i class="fa fa-phone"></i> +45 58 58 58 58
                      </span>
                      <span>
                        <i class="fa fa-at"></i> slick@phil.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="back">
                <div class="title">
                  <h2>Simone Lickbait</h2>
                  <span>Fascism Foiler</span>
                </div>
                <div class="bio">
                  <p>
                    Nulla facilisi. Morbi in mauris ipsum. Etiam ut justo vel
                    elit eleifend mattis eget eget arcu. Integer tincidunt dolor
                    pharetra sem iaculis egestas. Nam feugiat eleifend lacus
                    hendrerit iaculis.
                  </p>
                </div>
                <div class="social">
                  <div class="sms">
                    <div class="sm twitter">
                      <i class="fa fa-twitter"></i>
                    </div>
                    <div class="sm facebook">
                      <i class="fa fa-facebook"></i>
                    </div>
                    <div class="sm pinterest">
                      <i class="fa fa-pinterest"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessCard;
