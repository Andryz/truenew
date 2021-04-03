"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var navLoginBtns = document.querySelectorAll('[data-nav-login="val"]');
var navSignUpBtns = document.querySelectorAll('[data-nav-signup="val"]');
var nav = document.querySelector('[data-nav="val"]');
var popupClose = document.querySelector('[data-popup-close="val"]');
var popupLogin = document.querySelector('[data-popup="login"]');
var popupLoginBtn = document.querySelector('[data-popup-btn="val"]');
var brandsItems = document.querySelectorAll('[data-brands-item="val"]');
var brandShow = document.querySelector('[data-brand-main="val"]');
var brandDescriptionText = document.querySelector('[data-brand-description-text="val"]');
var brandSiteLink = document.querySelector('[data-brand-site-link="val"]');
var brandLicensesLink = document.querySelector('[data-brand-licenses-link="val"]');
var brandAchievements = document.querySelectorAll('[data-brand-achievements="val"]');
var brandBottomBtn = document.querySelector('[data-brand-btn="val"]');
var brandIframe = document.querySelector('[data-brand-iframe="val"]'); // (data-brand-achievements='val')
// data-brand-description-text='val'
// data-brand-site-link

var brandArrow = document.querySelector('[data-brand-arrow="val"]');
var brandMoreBtn = document.querySelector('[data-brand-more="btn"]');
var brandMoreBtnText = document.querySelector('[data-brand-more="text"]');
var brandDescriptionMore = document.querySelector('[data-brand-description-more="val"]');
var brandDescriptionMoreWrapp = document.querySelector('[data-brand-description-more="wrapp"]');
var brandSlider = document.querySelector('[data-brands-slider="val"]');
var headerChoicesMain = document.querySelector('[data-header-choices-main="val"]');
var choiceBrandTrueflipCom = document.querySelector('[data-choice-trueflipcom="val"]');
var choiceBrandTrueflip = document.querySelector('[data-choice-trueflip="val"]');
var choiceBrandEmojino = document.querySelector('[data-choice-emojino="val"]');
var choiceBrandImgTrueflip = document.querySelector('[data-choice-img-trueflip="val"]');
var choiceBrandImgEmojino = document.querySelector('[data-choice-img-emojino="val"]');
var choiceBrandWrapp = document.querySelector('[data-choice-brand-wrapp="val"]'); // (data-choice-brand-wrapp='val')

var choiceBrandImgTrueflipLable = document.querySelector('[data-choice-img-trueflip-lable="val"]');
var choiceBrandImgEmojinoLable = document.querySelector('[data-choice-img-emojino-lable="val"]');
var choiceBrandImgTrueflipRectangle = document.querySelector('[data-choice-img-trueflip-rectangle="val"]');
var choiceBrandImgEmojinoRectangle = document.querySelector('[data-choice-img-emojino-rectangle="val"]');
var choiceBrands = document.querySelectorAll('[data-choice-brand="val"]');
var testimonialsContentWrapp = document.querySelector('[data-testimonials-content-wrapp="val"]');
var testimonialsContent = document.querySelector('[data-testimonials-content="val"]');
var testimonialsBtn = document.querySelector('[data-testimonials-btn="val"]');
var faqTitles = document.querySelectorAll('[data-faq-title="val"]');
var faqTextWrapps = document.querySelectorAll('[data-faq-text-wrapp="val"]');
var faqTexts = document.querySelectorAll('[data-faq-text="val"]');
var affiliateContactBtns = document.querySelectorAll('[data-affiliate-contact-btn="val"]');
var affiliateInput = document.querySelector('[data-affiliate-input="val"]');
var submitFF = document.querySelector('#submitFF');
var navItems = document.querySelectorAll('[data-nav-item="val"]');
var popupMenu = document.querySelector('[data-popup-menu="val"]');
var navMenu = document.querySelector('[data-nav-menu="val"]');
var popupMenuCloseAll = document.querySelectorAll('[data-menu-close="val"]'); // let brandImgMain= document.querySelector('[data-brand-main="val"]');
// let brandImgItems= document.querySelectorAll('[data-brands-item="val"]');

var brandDescriptionShow = false; // (data-brand-main='val')

var lpInfo;
var activePopupObj = 'login'; // Get json information

var getInfo = function getInfo() {
  fetch('./json/main.json')
    // fetch('https://andryz.github.io/TruePartners2/json/main.json')
    .then(function (response) {
    return response.json();
  }).then(function (myJson) {
    lpInfo = myJson;
    window.lpInfo = myJson;
  });
};

getInfo(); // Open popup Login

var openPopupLogin = function openPopupLogin(btn) {
  activePopupObj = btn;
  popupLogin.classList.add('show');
  document.body.classList.add('show-popup');

  for (var key in lpInfo.popup[btn]) {
    var selector = document.querySelector("[data-popup-".concat(key, "=\"val\"]"));

    if (key === 'tflipHref' || key === 'emojinoHref' || key === 'tflipComHref') {
      selector.href = lpInfo.popup[btn][key];
    } else {
      selector.innerHTML = lpInfo.popup[btn][key];
    }
  }
};

window.addEventListener('scroll', function () {
  if (window.scrollY > 10) {
    nav.classList.add('fixed');
    nav.parentElement.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
    nav.parentElement.classList.remove('fixed');
  }
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = navLoginBtns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var btn = _step.value;
    btn.addEventListener('click', function () {
      return openPopupLogin('login');
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = navSignUpBtns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _btn = _step2.value;

    _btn.addEventListener('click', function () {
      return openPopupLogin('signup');
    });
  } // Toogle login or signup

} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

popupLoginBtn.addEventListener('click', function () {
  return activePopupObj === 'login' ? openPopupLogin('signup') : openPopupLogin('login');
}); // Close popup Login

popupClose.addEventListener('click', function () {
  popupLogin.classList.remove('show');
  document.body.classList.remove('show-popup');
}); // Nav

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  var _loop5 = function _loop5() {
    var item = _step3.value;
    item.addEventListener('click', function () {
      // window.location.href
      // origin
      // document.location.href = "http://localhost:3000";
      if (window.location.origin + '/' !== document.location.href) {
        document.location.href = window.location.origin;
      }

      var itemValue = item.getAttribute('data-nav');
      var navElem = document.querySelector("[data-".concat(itemValue, "=\"val\"]")); // navElem.scrollIntoView({ behavior: 'smooth'});

      var yOffset = -90;
      var y = navElem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    });
  };

  for (var _iterator3 = navItems[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    _loop5();
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

if (window.location.origin + '/' === document.location.href) {
  // Mob menu
  navMenu.addEventListener('click', function () {
    popupMenu.classList.add('show');
  });
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = popupMenuCloseAll[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var close = _step4.value;
      close.addEventListener('click', function () {
        popupMenu.classList.remove('show');
      });
    } // brands

  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    var _loop = function _loop() {
      var _step5$value = _slicedToArray(_step5.value, 2),
          i = _step5$value[0],
          item = _step5$value[1];

      item.addEventListener('click', function () {
        var value = item.attributes['data-brands'].nodeValue;

        if (value.match('tf/video')) {
          brandIframe.classList.add('show');
        } else {
          brandIframe.classList.remove('show');
        }

        brandShow.src = "".concat(value);

        if (window.innerWidth <= 1000 && window.innerWidth >= 730) {
          brandArrow.style.top = "".concat(item.offsetTop, "px");
        } else {
          brandArrow.style.left = "".concat(item.offsetLeft, "px");
        }
      });
    };

    for (var _iterator5 = brandsItems.entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  brandMoreBtn.addEventListener('click', function () {
    var descriptionHeight = brandDescriptionMoreWrapp.clientHeight;
    brandDescriptionShow = !brandDescriptionShow;

    if (brandDescriptionShow) {
      brandDescriptionMore.style.height = "".concat(descriptionHeight + 50, "px");
      brandMoreBtn.classList.add('open');
      brandMoreBtnText.innerText = 'Hide';
    } else {
      brandDescriptionMore.style.height = "100px";
      brandMoreBtn.classList.remove('open');
      brandMoreBtnText.innerText = 'More';
    }
  }); // Choice Brands

  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    var _loop2 = function _loop2() {
      var brand = _step6.value;
      brand.addEventListener('click', function () {
        var brandName = 'trueflip';
        if (brand === choiceBrandEmojino || brand === choiceBrandImgEmojino || brand === choiceBrandImgEmojinoLable || brand === choiceBrandImgEmojinoRectangle) {
          brandName = 'emojino';
          choiceBrandTrueflip.classList.remove('-active');
          choiceBrandTrueflipCom.classList.remove('-active');
          choiceBrandEmojino.classList.add('-active');
          choiceBrandWrapp.classList.remove('-active-tf');
          choiceBrandWrapp.classList.add('-active-em');
          headerChoicesMain.classList.remove('-active-tf');
          headerChoicesMain.classList.add('-active-em');
          brandDescriptionMoreWrapp.classList.remove('tf');
          brandDescriptionMoreWrapp.classList.add('em');
          brandSlider.classList.remove('tf');
          brandSlider.classList.add('em');
          brandDescriptionMore.style.height = "100px";
          brandMoreBtn.classList.remove('open');
          brandMoreBtnText.innerText = 'More';
          brandDescriptionShow = false;
          brandsItems[0].click();
        }  else if (brand === choiceBrandTrueflip || brand === choiceBrandImgTrueflip || brand ===               choiceBrandImgTrueflipLable || brand === choiceBrandImgTrueflipRectangle) {
          brandName = 'trueflip';
          choiceBrandEmojino.classList.remove('-active');
          choiceBrandTrueflip.classList.add('-active');
          choiceBrandTrueflipCom.classList.remove('-active');
          choiceBrandWrapp.classList.remove('-active-em');
          choiceBrandWrapp.classList.add('-active-tf');
          headerChoicesMain.classList.remove('-active-em');
          headerChoicesMain.classList.add('-active-tf');
          brandDescriptionMoreWrapp.classList.add('tf');
          brandDescriptionMoreWrapp.classList.remove('em');
          brandSlider.classList.add('tf');
          brandSlider.classList.remove('em');
  
          brandDescriptionMore.style.height = `100px`;
          brandMoreBtn.classList.remove('open');
          brandMoreBtnText.innerText = 'More';
          brandDescriptionShow = false;
          brandsItems[0].click();
        }
        else{
          brandName = 'trueflipcom';
          choiceBrandEmojino.classList.remove('-active');
          choiceBrandTrueflip.classList.remove('-active');
          choiceBrandTrueflipCom.classList.add('-active');
          choiceBrandWrapp.classList.remove('-active-em');
          choiceBrandWrapp.classList.remove('-active-tf');
          headerChoicesMain.classList.remove('-active-em');
          headerChoicesMain.classList.remove('-active-tf');
          brandDescriptionMoreWrapp.classList.remove('tf');
          brandDescriptionMoreWrapp.classList.remove('em');
          brandDescriptionMoreWrapp.classList.add('tfcom');
          // brandSlider.classList.remove('tf');
          brandSlider.classList.remove('em');
          brandSlider.classList.add('tf');
  
          brandDescriptionMore.style.height = `100px`;
          brandMoreBtn.classList.remove('open');
          brandMoreBtnText.innerText = 'More';
          brandDescriptionShow = false;
          brandsItems[0].click();
        }

        var info = lpInfo.brands[brandName];
        brandShow.src = info.imgs[0].src;
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = info.imgs.entries()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var _step9$value = _slicedToArray(_step9.value, 2),
                i = _step9$value[0],
                img = _step9$value[1];

            brandsItems[i].childNodes[0].src = img.src;
            brandsItems[i].attributes['data-brands'].value = img.src;
            brandDescriptionText.innerHTML = info.topDescripton;
            brandSiteLink.innerText = info.site.text;
            brandSiteLink.href = info.site.link;
            brandLicensesLink.href = info.license.link;
            brandLicensesLink.childNodes[0].src = info.license.src;
            brandBottomBtn.innerText = info.btn.text;
            brandBottomBtn.href = info.btn.link;
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
              _iterator9.return();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }

        var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
          for (var _iterator10 = brandAchievements[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            var achievement = _step10.value;

            if (brandName === 'emojino' || brandName === 'trueflipcom') {
              achievement.style.display = 'none';
            } else {
              achievement.style.display = 'block';
            }
          }
        } catch (err) {
          _didIteratorError10 = true;
          _iteratorError10 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
              _iterator10.return();
            }
          } finally {
            if (_didIteratorError10) {
              throw _iteratorError10;
            }
          }
        }
      });
    };

    for (var _iterator6 = choiceBrands[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      _loop2();
    } // Testimonials
    // testimonialsContentWrapp
    // testimonialsContent

  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
        _iterator6.return();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  var testimonialsOpen = false;
  var testimonialsContentHeight = testimonialsContent.clientHeight;
  testimonialsBtn.addEventListener('click', function () {
    testimonialsOpen = !testimonialsOpen;
    var testimonialsContentWrappHeight = testimonialsContentWrapp.clientHeight;

    if (testimonialsOpen) {
      testimonialsContent.style.height = testimonialsContentWrappHeight + 'px';
      testimonialsBtn.innerText = 'Hide';
      var navElem = document.querySelector("[data-testimonials=\"val\"]"); // navElem.scrollIntoView({ behavior: 'smooth'});

      var yOffset = -90;
      var y = navElem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    } else {
      testimonialsContent.style.height = testimonialsContentHeight + 'px';
      testimonialsBtn.innerText = 'Show More';
    }
  }); // FAQ

  var _iteratorNormalCompletion7 = true;
  var _didIteratorError7 = false;
  var _iteratorError7 = undefined;

  try {
    var _loop3 = function _loop3() {
      var _step7$value = _slicedToArray(_step7.value, 2),
          i = _step7$value[0],
          title = _step7$value[1];

      title.addEventListener('click', function () {
        title.classList.toggle('active');

        if (title.classList.contains('active')) {
          var faqTextHeight = faqTexts[i].clientHeight;
          faqTextWrapps[i].style.height = faqTextHeight + 'px';
        } else {
          faqTextWrapps[i].style.height = '0px';
        }
      });
    };

    for (var _iterator7 = faqTitles.entries()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
      _loop3();
    } // Affiliate

  } catch (err) {
    _didIteratorError7 = true;
    _iteratorError7 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
        _iterator7.return();
      }
    } finally {
      if (_didIteratorError7) {
        throw _iteratorError7;
      }
    }
  }

  var _iteratorNormalCompletion8 = true;
  var _didIteratorError8 = false;
  var _iteratorError8 = undefined;

  try {
    var _loop4 = function _loop4() {
      var contact = _step8.value;
      contact.addEventListener('click', function () {
        contact.childNodes[1].classList.remove('tooltip');
        affiliateInput.value = contact.getAttribute('data-affiliate-contact');
        affiliateInput.select();
        document.execCommand("copy"); // span tooltip

        contact.childNodes[1].classList.add('tooltip');
      });
    };

    for (var _iterator8 = affiliateContactBtns[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
      _loop4();
    }
  } catch (err) {
    _didIteratorError8 = true;
    _iteratorError8 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
        _iterator8.return();
      }
    } finally {
      if (_didIteratorError8) {
        throw _iteratorError8;
      }
    }
  }
}

submitFF.addEventListener('click', function () {
  submitFF.innerText = 'sending...';
  button.disabled = true;
});
$('#ajax-contact-form').submit(function (event) {
  event.preventDefault();
  var formNm = $('#ajax-contact-form')[0];
  var formData = new FormData(formNm);
  $.ajax({
    url: "php/contact.php",
    type: "post",
    data: formData,
    contentType: false,
    processData: false,
    success: function success(response) {
      if (response) {
        setTimeout(function () {
          submitFF.innerText = 'Contact Us';
          button.disabled = false;
        }, 1000); // overlay.classList.remove('hide');
        // successPopap.classList.remove('hide');
      }
    },
    error: function error(_error) {
      setTimeout(function () {
        submitFF.innerText = 'Contact Us';
        button.disabled = false;
      }, 1000);
    }
  });
  formNm.reset();
}); //- window.scrollTo(0,0)
// .scrollIntoView({ behavior: 'smooth' })
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsibmF2TG9naW5CdG5zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmF2U2lnblVwQnRucyIsIm5hdiIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cENsb3NlIiwicG9wdXBMb2dpbiIsInBvcHVwTG9naW5CdG4iLCJicmFuZHNJdGVtcyIsImJyYW5kU2hvdyIsImJyYW5kRGVzY3JpcHRpb25UZXh0IiwiYnJhbmRTaXRlTGluayIsImJyYW5kTGljZW5zZXNMaW5rIiwiYnJhbmRBY2hpZXZlbWVudHMiLCJicmFuZEJvdHRvbUJ0biIsImJyYW5kSWZyYW1lIiwiYnJhbmRBcnJvdyIsImJyYW5kTW9yZUJ0biIsImJyYW5kTW9yZUJ0blRleHQiLCJicmFuZERlc2NyaXB0aW9uTW9yZSIsImJyYW5kRGVzY3JpcHRpb25Nb3JlV3JhcHAiLCJicmFuZFNsaWRlciIsImhlYWRlckNob2ljZXNNYWluIiwiY2hvaWNlQnJhbmRUcnVlZmxpcCIsImNob2ljZUJyYW5kRW1vamlubyIsImNob2ljZUJyYW5kSW1nVHJ1ZWZsaXAiLCJjaG9pY2VCcmFuZEltZ0Vtb2ppbm8iLCJjaG9pY2VCcmFuZFdyYXBwIiwiY2hvaWNlQnJhbmRJbWdUcnVlZmxpcExhYmxlIiwiY2hvaWNlQnJhbmRJbWdFbW9qaW5vTGFibGUiLCJjaG9pY2VCcmFuZEltZ1RydWVmbGlwUmVjdGFuZ2xlIiwiY2hvaWNlQnJhbmRJbWdFbW9qaW5vUmVjdGFuZ2xlIiwiY2hvaWNlQnJhbmRzIiwidGVzdGltb25pYWxzQ29udGVudFdyYXBwIiwidGVzdGltb25pYWxzQ29udGVudCIsInRlc3RpbW9uaWFsc0J0biIsImZhcVRpdGxlcyIsImZhcVRleHRXcmFwcHMiLCJmYXFUZXh0cyIsImFmZmlsaWF0ZUNvbnRhY3RCdG5zIiwiYWZmaWxpYXRlSW5wdXQiLCJzdWJtaXRGRiIsIm5hdkl0ZW1zIiwicG9wdXBNZW51IiwibmF2TWVudSIsInBvcHVwTWVudUNsb3NlQWxsIiwiYnJhbmREZXNjcmlwdGlvblNob3ciLCJscEluZm8iLCJhY3RpdmVQb3B1cE9iaiIsImdldEluZm8iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJteUpzb24iLCJ3aW5kb3ciLCJvcGVuUG9wdXBMb2dpbiIsImJ0biIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJrZXkiLCJwb3B1cCIsInNlbGVjdG9yIiwiaHJlZiIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxZIiwicGFyZW50RWxlbWVudCIsInJlbW92ZSIsIml0ZW0iLCJsb2NhdGlvbiIsIm9yaWdpbiIsIml0ZW1WYWx1ZSIsImdldEF0dHJpYnV0ZSIsIm5hdkVsZW0iLCJ5T2Zmc2V0IiwieSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImNsb3NlIiwiaSIsInZhbHVlIiwiYXR0cmlidXRlcyIsIm5vZGVWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJtYXRjaCIsInNyYyIsImlubmVyV2lkdGgiLCJzdHlsZSIsIm9mZnNldFRvcCIsImxlZnQiLCJvZmZzZXRMZWZ0IiwiZW50cmllcyIsImRlc2NyaXB0aW9uSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiaGVpZ2h0IiwiaW5uZXJUZXh0IiwiYnJhbmQiLCJicmFuZE5hbWUiLCJjbGljayIsImluZm8iLCJicmFuZHMiLCJpbWdzIiwiaW1nIiwiY2hpbGROb2RlcyIsInRvcERlc2NyaXB0b24iLCJzaXRlIiwidGV4dCIsImxpbmsiLCJsaWNlbnNlIiwiYWNoaWV2ZW1lbnQiLCJkaXNwbGF5IiwidGVzdGltb25pYWxzT3BlbiIsInRlc3RpbW9uaWFsc0NvbnRlbnRIZWlnaHQiLCJ0ZXN0aW1vbmlhbHNDb250ZW50V3JhcHBIZWlnaHQiLCJ0aXRsZSIsInRvZ2dsZSIsImNvbnRhaW5zIiwiZmFxVGV4dEhlaWdodCIsImNvbnRhY3QiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImJ1dHRvbiIsImRpc2FibGVkIiwiJCIsInN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtTm0iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsInN1Y2Nlc3MiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJyZXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQix3QkFBMUIsQ0FBbkI7QUFDQSxJQUFJQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIseUJBQTFCLENBQXBCO0FBQ0EsSUFBSUUsR0FBRyxHQUFHSCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsa0JBQXZCLENBQVY7QUFDQSxJQUFJQyxVQUFVLEdBQUdMLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QiwwQkFBdkIsQ0FBakI7QUFDQSxJQUFJRSxVQUFVLEdBQUdOLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixzQkFBdkIsQ0FBakI7QUFDQSxJQUFJRyxhQUFhLEdBQUdQLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1Qix3QkFBdkIsQ0FBcEI7QUFFQSxJQUFJSSxXQUFXLEdBQUdSLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsMEJBQTFCLENBQWxCO0FBQ0EsSUFBSVEsU0FBUyxHQUFHVCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIseUJBQXZCLENBQWhCO0FBQ0EsSUFBSU0sb0JBQW9CLEdBQUdWLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixxQ0FBdkIsQ0FBM0I7QUFDQSxJQUFJTyxhQUFhLEdBQUdYLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1Qiw4QkFBdkIsQ0FBcEI7QUFDQSxJQUFJUSxpQkFBaUIsR0FBR1osUUFBUSxDQUFDSSxhQUFULENBQXVCLGtDQUF2QixDQUF4QjtBQUNBLElBQUlTLGlCQUFpQixHQUFHYixRQUFRLENBQUNDLGdCQUFULENBQTBCLGlDQUExQixDQUF4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QUFDVm9DLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JyQyxRQUF4QjtBQUNBMkYsUUFBQUEsVUFBVSxDQUFDLFlBQUk7QUFDYnRHLFVBQUFBLFFBQVEsQ0FBQzRELFNBQVQsR0FBcUIsWUFBckI7QUFDQTBCLFVBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQixLQUFsQjtBQUNELFNBSFMsRUFHUCxJQUhPLENBQVYsQ0FGVSxDQU1SO0FBQ0E7QUFDSDtBQUNKLEtBaEJFO0FBaUJIZ0IsSUFBQUEsS0FBSyxFQUFFLGVBQVNBLE1BQVQsRUFBZTtBQUNwQkQsTUFBQUEsVUFBVSxDQUFDLFlBQUk7QUFDYnRHLFFBQUFBLFFBQVEsQ0FBQzRELFNBQVQsR0FBcUIsWUFBckI7QUFDQTBCLFFBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQixLQUFsQjtBQUNELE9BSFMsRUFHUCxJQUhPLENBQVY7QUFLRDtBQXZCRSxHQUFQO0FBMEJBSyxFQUFBQSxNQUFNLENBQUNZLEtBQVA7QUFFRCxDQWxDRCxFLENBcUNBO0FBQ0E7QUMxWEEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBuYXZMb2dpbkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uYXYtbG9naW49XCJ2YWxcIl0nKTtcclxubGV0IG5hdlNpZ25VcEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uYXYtc2lnbnVwPVwidmFsXCJdJyk7XHJcbmxldCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uYXY9XCJ2YWxcIl0nKTtcclxubGV0IHBvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wb3B1cC1jbG9zZT1cInZhbFwiXScpO1xyXG5sZXQgcG9wdXBMb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBvcHVwPVwibG9naW5cIl0nKTtcclxubGV0IHBvcHVwTG9naW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wb3B1cC1idG49XCJ2YWxcIl0nKTtcclxuXHJcbmxldCBicmFuZHNJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJyYW5kcy1pdGVtPVwidmFsXCJdJyk7XHJcbmxldCBicmFuZFNob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1icmFuZC1tYWluPVwidmFsXCJdJyk7XHJcbmxldCBicmFuZERlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJyYW5kLWRlc2NyaXB0aW9uLXRleHQ9XCJ2YWxcIl0nKTtcclxubGV0IGJyYW5kU2l0ZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1icmFuZC1zaXRlLWxpbms9XCJ2YWxcIl0nKTtcclxubGV0IGJyYW5kTGljZW5zZXNMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYnJhbmQtbGljZW5zZXMtbGluaz1cInZhbFwiXScpO1xyXG5sZXQgYnJhbmRBY2hpZXZlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1icmFuZC1hY2hpZXZlbWVudHM9XCJ2YWxcIl0nKTtcclxubGV0IGJyYW5kQm90dG9tQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYnJhbmQtYnRuPVwidmFsXCJdJyk7XHJcbmxldCBicmFuZElmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJyYW5kLWlmcmFtZT1cInZhbFwiXScpO1xyXG5cclxuXHJcbi8vIChkYXRhLWJyYW5kLWFjaGlldmVtZW50cz0ndmFsJylcclxuLy8gZGF0YS1icmFuZC1kZXNjcmlwdGlvbi10ZXh0PSd2YWwnXHJcbi8vIGRhdGEtYnJhbmQtc2l0ZS1saW5rXHJcblxyXG5sZXQgYnJhbmRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJyYW5kLWFycm93PVwidmFsXCJdJyk7XHJcbmxldCBicmFuZE1vcmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1icmFuZC1tb3JlPVwiYnRuXCJdJyk7XHJcbmxldCBicmFuZE1vcmVCdG5UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYnJhbmQtbW9yZT1cInRleHRcIl0nKTtcclxubGV0IGJyYW5kRGVzY3JpcHRpb25Nb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYnJhbmQtZGVzY3JpcHRpb24tbW9yZT1cInZhbFwiXScpO1xyXG5sZXQgYnJhbmREZXNjcmlwdGlvbk1vcmVXcmFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJyYW5kLWRlc2NyaXB0aW9uLW1vcmU9XCJ3cmFwcFwiXScpO1xyXG5sZXQgYnJhbmRTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1icmFuZHMtc2xpZGVyPVwidmFsXCJdJyk7XHJcblxyXG5sZXQgaGVhZGVyQ2hvaWNlc01haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1oZWFkZXItY2hvaWNlcy1tYWluPVwidmFsXCJdJyk7XHJcbmxldCBjaG9pY2VCcmFuZFRydWVmbGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY2hvaWNlLXRydWVmbGlwPVwidmFsXCJdJyk7XHJcbmxldCBjaG9pY2VCcmFuZEVtb2ppbm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jaG9pY2UtZW1vamlubz1cInZhbFwiXScpO1xyXG5sZXQgY2hvaWNlQnJhbmRJbWdUcnVlZmxpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNob2ljZS1pbWctdHJ1ZWZsaXA9XCJ2YWxcIl0nKTtcclxubGV0IGNob2ljZUJyYW5kSW1nRW1vamlubyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNob2ljZS1pbWctZW1vamlubz1cInZhbFwiXScpO1xyXG5sZXQgY2hvaWNlQnJhbmRXcmFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNob2ljZS1icmFuZC13cmFwcD1cInZhbFwiXScpO1xyXG5cclxuLy8gKGRhdGEtY2hvaWNlLWJyYW5kLXdyYXBwPSd2YWwnKVxyXG5cclxubGV0IGNob2ljZUJyYW5kSW1nVHJ1ZWZsaXBMYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNob2ljZS1pbWctdHJ1ZWZsaXAtbGFibGU9XCJ2YWxcIl0nKTtcclxubGV0IGNob2ljZUJyYW5kSW1nRW1vamlub0xhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY2hvaWNlLWltZy1lbW9qaW5vLWxhYmxlPVwidmFsXCJdJyk7XHJcbmxldCBjaG9pY2VCcmFuZEltZ1RydWVmbGlwUmVjdGFuZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY2hvaWNlLWltZy10cnVlZmxpcC1yZWN0YW5nbGU9XCJ2YWxcIl0nKTtcclxubGV0IGNob2ljZUJyYW5kSW1nRW1vamlub1JlY3RhbmdsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNob2ljZS1pbWctZW1vamluby1yZWN0YW5nbGU9XCJ2YWxcIl0nKTtcclxuXHJcbmxldCBjaG9pY2VCcmFuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jaG9pY2UtYnJhbmQ9XCJ2YWxcIl0nKTtcclxuXHJcblxyXG5sZXQgdGVzdGltb25pYWxzQ29udGVudFdyYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVzdGltb25pYWxzLWNvbnRlbnQtd3JhcHA9XCJ2YWxcIl0nKTtcclxubGV0IHRlc3RpbW9uaWFsc0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZXN0aW1vbmlhbHMtY29udGVudD1cInZhbFwiXScpO1xyXG5sZXQgdGVzdGltb25pYWxzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVzdGltb25pYWxzLWJ0bj1cInZhbFwiXScpO1xyXG5cclxubGV0IGZhcVRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZhcS10aXRsZT1cInZhbFwiXScpO1xyXG5sZXQgZmFxVGV4dFdyYXBwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZhcS10ZXh0LXdyYXBwPVwidmFsXCJdJyk7XHJcbmxldCBmYXFUZXh0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZhcS10ZXh0PVwidmFsXCJdJyk7XHJcblxyXG5sZXQgYWZmaWxpYXRlQ29udGFjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hZmZpbGlhdGUtY29udGFjdC1idG49XCJ2YWxcIl0nKTtcclxubGV0IGFmZmlsaWF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYWZmaWxpYXRlLWlucHV0PVwidmFsXCJdJyk7XHJcblxyXG5sZXQgc3VibWl0RkYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0RkYnKTtcclxuXHJcbmxldCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5hdi1pdGVtPVwidmFsXCJdJyk7XHJcblxyXG5sZXQgcG9wdXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcG9wdXAtbWVudT1cInZhbFwiXScpO1xyXG5sZXQgbmF2TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5hdi1tZW51PVwidmFsXCJdJyk7XHJcbmxldCBwb3B1cE1lbnVDbG9zZUFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1lbnUtY2xvc2U9XCJ2YWxcIl0nKTtcclxuXHJcblxyXG4vLyBsZXQgYnJhbmRJbWdNYWluPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1icmFuZC1tYWluPVwidmFsXCJdJyk7XHJcbi8vIGxldCBicmFuZEltZ0l0ZW1zPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1icmFuZHMtaXRlbT1cInZhbFwiXScpO1xyXG5cclxuXHJcblxyXG5sZXQgYnJhbmREZXNjcmlwdGlvblNob3cgPSBmYWxzZTtcclxuLy8gKGRhdGEtYnJhbmQtbWFpbj0ndmFsJylcclxuXHJcbmxldCBscEluZm87XHJcbmxldCBhY3RpdmVQb3B1cE9iaiA9ICdsb2dpbic7XHJcblxyXG4vLyBHZXQganNvbiBpbmZvcm1hdGlvblxyXG5sZXQgZ2V0SW5mbyA9ICgpID0+IHtcclxuICBmZXRjaCgnLi9qc29uL21haW4uanNvbicpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKSB9KVxyXG4gICAgLnRoZW4oKG15SnNvbikgPT4ge1xyXG4gICAgICBscEluZm8gPSBteUpzb247XHJcbiAgICAgIHdpbmRvdy5scEluZm8gPSBteUpzb247XHJcbiAgICB9KTtcclxufVxyXG5nZXRJbmZvKCk7XHJcblxyXG4vLyBPcGVuIHBvcHVwIExvZ2luXHJcbmxldCBvcGVuUG9wdXBMb2dpbiA9IChidG4pID0+IHtcclxuICBhY3RpdmVQb3B1cE9iaiA9IGJ0bjtcclxuICBwb3B1cExvZ2luLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3Nob3ctcG9wdXAnKTtcclxuXHJcbiAgZm9yIChjb25zdCBrZXkgaW4gbHBJbmZvLnBvcHVwW2J0bl0pIHtcclxuICAgIGxldCBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwLSR7a2V5fT1cInZhbFwiXWApO1xyXG4gICAgaWYoa2V5ID09PSAndGZsaXBIcmVmJyB8fCBrZXkgPT09ICdlbW9qaW5vSHJlZicpe1xyXG4gICAgICBzZWxlY3Rvci5ocmVmID0gbHBJbmZvLnBvcHVwW2J0bl1ba2V5XTtcclxuICAgIH1lbHNle1xyXG4gICAgICBzZWxlY3Rvci5pbm5lckhUTUwgPSBscEluZm8ucG9wdXBbYnRuXVtrZXldO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKT0+e1xyXG4gIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDEwKSB7XHJcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcclxuICAgIG5hdi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcbiAgfWVsc2V7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQnKTtcclxuICAgIG5hdi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XHJcbiAgfVxyXG59KVxyXG5cclxuZm9yIChjb25zdCBidG4gb2YgbmF2TG9naW5CdG5zKSB7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3BlblBvcHVwTG9naW4oJ2xvZ2luJykpO1xyXG59XHJcblxyXG5mb3IgKGNvbnN0IGJ0biBvZiBuYXZTaWduVXBCdG5zKSB7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3BlblBvcHVwTG9naW4oJ3NpZ251cCcpKTtcclxufVxyXG5cclxuLy8gVG9vZ2xlIGxvZ2luIG9yIHNpZ251cFxyXG5wb3B1cExvZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWN0aXZlUG9wdXBPYmogPT09ICdsb2dpbicgPyBvcGVuUG9wdXBMb2dpbignc2lnbnVwJykgOiBvcGVuUG9wdXBMb2dpbignbG9naW4nKSk7XHJcblxyXG5cclxuLy8gQ2xvc2UgcG9wdXAgTG9naW5cclxucG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBwb3B1cExvZ2luLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctcG9wdXAnKTtcclxufSlcclxuXHJcblxyXG5cclxuLy8gTmF2XHJcbmZvcihsZXQgaXRlbSBvZiBuYXZJdGVtcykge1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWZcclxuICAgIC8vIG9yaWdpblxyXG4gICAgLy8gZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcbiAgICBpZih3aW5kb3cubG9jYXRpb24ub3JpZ2luKycvJyAhPT0gZG9jdW1lbnQubG9jYXRpb24uaHJlZiApIHtcclxuICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cclxuICAgIH1cclxuICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLW5hdicpO1xyXG4gICAgY29uc3QgbmF2RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLSR7aXRlbVZhbHVlfT1cInZhbFwiXWApO1xyXG4gICAgLy8gbmF2RWxlbS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJ30pO1xyXG4gICAgY29uc3QgeU9mZnNldCA9IC05MDtcclxuICAgIGNvbnN0IHkgPSBuYXZFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCArIHlPZmZzZXQ7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe3RvcDogeSwgYmVoYXZpb3I6ICdzbW9vdGgnfSk7XHJcblxyXG4gIH0pXHJcbn0gXHJcblxyXG5pZih3aW5kb3cubG9jYXRpb24ub3JpZ2luKycvJyA9PT0gZG9jdW1lbnQubG9jYXRpb24uaHJlZiApIHtcclxuXHJcbiAgICAvLyBNb2IgbWVudVxyXG5cclxuICBuYXZNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIHBvcHVwTWVudS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgfSlcclxuXHJcbiAgZm9yKGNvbnN0IGNsb3NlIG9mIHBvcHVwTWVudUNsb3NlQWxsKSB7XHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgIHBvcHVwTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gYnJhbmRzXHJcbiAgZm9yIChjb25zdCBbaSwgaXRlbV0gb2YgYnJhbmRzSXRlbXMuZW50cmllcygpKSB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgY29uc3QgdmFsdWUgPSBpdGVtLmF0dHJpYnV0ZXNbJ2RhdGEtYnJhbmRzJ10ubm9kZVZhbHVlO1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgIGlmKHZhbHVlLm1hdGNoKCd0Zi92aWRlbycpKSB7ICBcclxuICAgICAgICBicmFuZElmcmFtZS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGJyYW5kSWZyYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgfVxyXG4gICAgICBicmFuZFNob3cuc3JjID0gYCR7dmFsdWV9YDtcclxuXHJcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDAwICYmIHdpbmRvdy5pbm5lcldpZHRoID49IDczMCkge1xyXG4gICAgICAgIGJyYW5kQXJyb3cuc3R5bGUudG9wID0gYCR7aXRlbS5vZmZzZXRUb3B9cHhgO1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgYnJhbmRBcnJvdy5zdHlsZS5sZWZ0ID0gYCR7aXRlbS5vZmZzZXRMZWZ0fXB4YDtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGJyYW5kTW9yZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxldCBkZXNjcmlwdGlvbkhlaWdodCA9IGJyYW5kRGVzY3JpcHRpb25Nb3JlV3JhcHAuY2xpZW50SGVpZ2h0O1xyXG4gICAgYnJhbmREZXNjcmlwdGlvblNob3cgPSAhYnJhbmREZXNjcmlwdGlvblNob3c7XHJcbiAgICBpZiAoYnJhbmREZXNjcmlwdGlvblNob3cpIHtcclxuICAgICAgYnJhbmREZXNjcmlwdGlvbk1vcmUuc3R5bGUuaGVpZ2h0ID0gYCR7ZGVzY3JpcHRpb25IZWlnaHQgKyA1MH1weGA7XHJcbiAgICAgIGJyYW5kTW9yZUJ0bi5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGJyYW5kTW9yZUJ0blRleHQuaW5uZXJUZXh0ID0gJ0hpZGUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnJhbmREZXNjcmlwdGlvbk1vcmUuc3R5bGUuaGVpZ2h0ID0gYDEwMHB4YDtcclxuICAgICAgYnJhbmRNb3JlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgYnJhbmRNb3JlQnRuVGV4dC5pbm5lclRleHQgPSAnTW9yZSc7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy8gQ2hvaWNlIEJyYW5kc1xyXG4gIGZvciAoY29uc3QgYnJhbmQgb2YgY2hvaWNlQnJhbmRzKSB7XHJcbiAgICBicmFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgIFxyXG5cclxuICAgICAgbGV0IGJyYW5kTmFtZSA9ICd0cnVlZmxpcCc7XHJcbiAgICAgIGlmIChicmFuZCA9PT0gY2hvaWNlQnJhbmRFbW9qaW5vIHx8IGJyYW5kID09PSBjaG9pY2VCcmFuZEltZ0Vtb2ppbm8gfHwgYnJhbmQgPT09IGNob2ljZUJyYW5kSW1nRW1vamlub0xhYmxlIHx8IGJyYW5kID09PSBjaG9pY2VCcmFuZEltZ0Vtb2ppbm9SZWN0YW5nbGUpIHtcclxuICAgICAgICBicmFuZE5hbWUgPSAnZW1vamlubyc7XHJcbiAgICAgICAgY2hvaWNlQnJhbmRUcnVlZmxpcC5jbGFzc0xpc3QucmVtb3ZlKCctYWN0aXZlJyk7XHJcbiAgICAgICAgY2hvaWNlQnJhbmRFbW9qaW5vLmNsYXNzTGlzdC5hZGQoJy1hY3RpdmUnKTtcclxuICAgICAgICBjaG9pY2VCcmFuZFdyYXBwLmNsYXNzTGlzdC5yZW1vdmUoJy1hY3RpdmUtdGYnKTtcclxuICAgICAgICBjaG9pY2VCcmFuZFdyYXBwLmNsYXNzTGlzdC5hZGQoJy1hY3RpdmUtZW0nKTtcclxuICAgICAgICBoZWFkZXJDaG9pY2VzTWFpbi5jbGFzc0xpc3QucmVtb3ZlKCctYWN0aXZlLXRmJyk7XHJcbiAgICAgICAgaGVhZGVyQ2hvaWNlc01haW4uY2xhc3NMaXN0LmFkZCgnLWFjdGl2ZS1lbScpO1xyXG4gICAgICAgIGJyYW5kRGVzY3JpcHRpb25Nb3JlV3JhcHAuY2xhc3NMaXN0LnJlbW92ZSgndGYnKTtcclxuICAgICAgICBicmFuZERlc2NyaXB0aW9uTW9yZVdyYXBwLmNsYXNzTGlzdC5hZGQoJ2VtJyk7XHJcbiAgICAgICAgYnJhbmRTbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSgndGYnKTtcclxuICAgICAgICBicmFuZFNsaWRlci5jbGFzc0xpc3QuYWRkKCdlbScpO1xyXG5cclxuICAgICAgICBicmFuZERlc2NyaXB0aW9uTW9yZS5zdHlsZS5oZWlnaHQgPSBgMTAwcHhgO1xyXG4gICAgICAgIGJyYW5kTW9yZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICAgICAgYnJhbmRNb3JlQnRuVGV4dC5pbm5lclRleHQgPSAnTW9yZSc7XHJcbiAgICAgICAgYnJhbmREZXNjcmlwdGlvblNob3cgPSBmYWxzZTtcclxuICAgICAgICBicmFuZHNJdGVtc1swXS5jbGljaygpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBjaG9pY2VCcmFuZEVtb2ppbm8uY2xhc3NMaXN0LnJlbW92ZSgnLWFjdGl2ZScpO1xyXG4gICAgICAgIGNob2ljZUJyYW5kVHJ1ZWZsaXAuY2xhc3NMaXN0LmFkZCgnLWFjdGl2ZScpO1xyXG4gICAgICAgIGNob2ljZUJyYW5kV3JhcHAuY2xhc3NMaXN0LnJlbW92ZSgnLWFjdGl2ZS1lbScpO1xyXG4gICAgICAgIGNob2ljZUJyYW5kV3JhcHAuY2xhc3NMaXN0LmFkZCgnLWFjdGl2ZS10ZicpO1xyXG4gICAgICAgIGhlYWRlckNob2ljZXNNYWluLmNsYXNzTGlzdC5yZW1vdmUoJy1hY3RpdmUtZW0nKTtcclxuICAgICAgICBoZWFkZXJDaG9pY2VzTWFpbi5jbGFzc0xpc3QuYWRkKCctYWN0aXZlLXRmJyk7XHJcbiAgICAgICAgYnJhbmREZXNjcmlwdGlvbk1vcmVXcmFwcC5jbGFzc0xpc3QuYWRkKCd0ZicpO1xyXG4gICAgICAgIGJyYW5kRGVzY3JpcHRpb25Nb3JlV3JhcHAuY2xhc3NMaXN0LnJlbW92ZSgnZW0nKTtcclxuICAgICAgICBicmFuZFNsaWRlci5jbGFzc0xpc3QuYWRkKCd0ZicpO1xyXG4gICAgICAgIGJyYW5kU2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2VtJyk7XHJcblxyXG4gICAgICAgIGJyYW5kRGVzY3JpcHRpb25Nb3JlLnN0eWxlLmhlaWdodCA9IGAxMDBweGA7XHJcbiAgICAgICAgYnJhbmRNb3JlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgICBicmFuZE1vcmVCdG5UZXh0LmlubmVyVGV4dCA9ICdNb3JlJztcclxuICAgICAgICBicmFuZERlc2NyaXB0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIGJyYW5kc0l0ZW1zWzBdLmNsaWNrKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGluZm8gPSBscEluZm8uYnJhbmRzW2JyYW5kTmFtZV07XHJcbiAgICAgIGNvbnNvbGUubG9nKCdpbmZvJywgaW5mbyk7XHJcblxyXG4gICAgICBicmFuZFNob3cuc3JjID0gaW5mby5pbWdzWzBdLnNyYztcclxuICAgICAgZm9yIChjb25zdCBbaSwgaW1nXSBvZiBpbmZvLmltZ3MuZW50cmllcygpKSB7XHJcbiAgICAgICAgYnJhbmRzSXRlbXNbaV0uY2hpbGROb2Rlc1swXS5zcmMgPSBpbWcuc3JjO1xyXG4gICAgICAgIGJyYW5kc0l0ZW1zW2ldLmF0dHJpYnV0ZXNbJ2RhdGEtYnJhbmRzJ10udmFsdWUgPSBpbWcuc3JjO1xyXG4gICAgICAgIGJyYW5kRGVzY3JpcHRpb25UZXh0LmlubmVySFRNTCA9IGluZm8udG9wRGVzY3JpcHRvbjtcclxuICAgICAgICBicmFuZFNpdGVMaW5rLmlubmVyVGV4dCA9IGluZm8uc2l0ZS50ZXh0O1xyXG4gICAgICAgIGJyYW5kU2l0ZUxpbmsuaHJlZiA9IGluZm8uc2l0ZS5saW5rO1xyXG4gICAgICAgIGJyYW5kTGljZW5zZXNMaW5rLmhyZWYgPSBpbmZvLmxpY2Vuc2UubGluaztcclxuICAgICAgICBicmFuZExpY2Vuc2VzTGluay5jaGlsZE5vZGVzWzBdLnNyYyA9IGluZm8ubGljZW5zZS5zcmM7XHJcbiAgICAgICAgYnJhbmRCb3R0b21CdG4uaW5uZXJUZXh0ID0gaW5mby5idG4udGV4dDtcclxuICAgICAgICBicmFuZEJvdHRvbUJ0bi5ocmVmID0gaW5mby5idG4ubGluaztcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChjb25zdCBhY2hpZXZlbWVudCBvZiBicmFuZEFjaGlldmVtZW50cykge1xyXG4gICAgICAgIGlmIChicmFuZE5hbWUgPT09ICdlbW9qaW5vJykge1xyXG4gICAgICAgICAgYWNoaWV2ZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWNoaWV2ZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIFRlc3RpbW9uaWFsc1xyXG5cclxuICAvLyB0ZXN0aW1vbmlhbHNDb250ZW50V3JhcHBcclxuICAvLyB0ZXN0aW1vbmlhbHNDb250ZW50XHJcblxyXG4gIGxldCB0ZXN0aW1vbmlhbHNPcGVuID0gZmFsc2U7XHJcbiAgbGV0IHRlc3RpbW9uaWFsc0NvbnRlbnRIZWlnaHQgPSB0ZXN0aW1vbmlhbHNDb250ZW50LmNsaWVudEhlaWdodDtcclxuXHJcbiAgdGVzdGltb25pYWxzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIHRlc3RpbW9uaWFsc09wZW4gPSAhdGVzdGltb25pYWxzT3BlbjtcclxuICAgIGxldCB0ZXN0aW1vbmlhbHNDb250ZW50V3JhcHBIZWlnaHQgPSB0ZXN0aW1vbmlhbHNDb250ZW50V3JhcHAuY2xpZW50SGVpZ2h0O1xyXG4gICAgaWYodGVzdGltb25pYWxzT3Blbil7XHJcbiAgICAgIHRlc3RpbW9uaWFsc0NvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gdGVzdGltb25pYWxzQ29udGVudFdyYXBwSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgdGVzdGltb25pYWxzQnRuLmlubmVyVGV4dCA9ICdIaWRlJztcclxuICAgICAgY29uc3QgbmF2RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRlc3RpbW9uaWFscz1cInZhbFwiXWApO1xyXG4gICAgICAvLyBuYXZFbGVtLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnfSk7XHJcbiAgICAgIGNvbnN0IHlPZmZzZXQgPSAtOTA7XHJcbiAgICAgIGNvbnN0IHkgPSBuYXZFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCArIHlPZmZzZXQ7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOiB5LCBiZWhhdmlvcjogJ3Ntb290aCd9KTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0ZXN0aW1vbmlhbHNDb250ZW50LnN0eWxlLmhlaWdodCA9IHRlc3RpbW9uaWFsc0NvbnRlbnRIZWlnaHQgKyAncHgnO1xyXG4gICAgICB0ZXN0aW1vbmlhbHNCdG4uaW5uZXJUZXh0ID0gJ1Nob3cgTW9yZSc7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIEZBUVxyXG5cclxuXHJcbiAgZm9yIChjb25zdCBbaSwgdGl0bGVdIG9mIGZhcVRpdGxlcy5lbnRyaWVzKCkpIHtcclxuXHJcbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICBpZih0aXRsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcclxuICAgICAgICBjb25zdCBmYXFUZXh0SGVpZ2h0ID0gZmFxVGV4dHNbaV0uY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGZhcVRleHRXcmFwcHNbaV0uc3R5bGUuaGVpZ2h0ID0gZmFxVGV4dEhlaWdodCsncHgnO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBmYXFUZXh0V3JhcHBzW2ldLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxuICAvLyBBZmZpbGlhdGVcclxuXHJcbiAgZm9yKGNvbnN0IGNvbnRhY3Qgb2YgYWZmaWxpYXRlQ29udGFjdEJ0bnMpIHtcclxuICAgIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICBjb250YWN0LmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnJlbW92ZSgndG9vbHRpcCcpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coY29udGFjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWZmaWxpYXRlLWNvbnRhY3QnKSk7XHJcbiAgICAgIGFmZmlsaWF0ZUlucHV0LnZhbHVlID0gY29udGFjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWZmaWxpYXRlLWNvbnRhY3QnKTtcclxuICAgICAgYWZmaWxpYXRlSW5wdXQuc2VsZWN0KCk7XHJcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuXHJcbiAgICAgIC8vIHNwYW4gdG9vbHRpcFxyXG4gICAgICBjb250YWN0LmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LmFkZCgndG9vbHRpcCcpO1xyXG4gICAgICBcclxuICAgIH0pXHJcbiAgfVxyXG5cclxufVxyXG5cclxuc3VibWl0RkYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gIHN1Ym1pdEZGLmlubmVyVGV4dCA9ICdzZW5kaW5nLi4uJztcclxuICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG59KTtcclxuXHJcblxyXG4kKCcjYWpheC1jb250YWN0LWZvcm0nKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe1xyXG5cclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHZhciBmb3JtTm0gPSAkKCcjYWpheC1jb250YWN0LWZvcm0nKVswXTtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybU5tKTtcclxuXHJcbiAgJC5hamF4KHtcclxuICAgICAgdXJsOiBcInBocC9jb250YWN0LnBocFwiLFxyXG4gICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgICBpZihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgIHN1Ym1pdEZGLmlubmVyVGV4dCA9ICdDb250YWN0IFVzJztcclxuICAgICAgICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgLy8gb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgLy8gc3VjY2Vzc1BvcGFwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICBzdWJtaXRGRi5pbm5lclRleHQgPSAnQ29udGFjdCBVcyc7XHJcbiAgICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICB9KTtcclxuICBmb3JtTm0ucmVzZXQoKTtcclxuXHJcbn0pO1xyXG5cclxuXHJcbi8vLSB3aW5kb3cuc2Nyb2xsVG8oMCwwKVxyXG4vLyAuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSkiLCIiXX0=
