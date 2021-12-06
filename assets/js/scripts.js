var $ = jQuery.noConflict();

/* $(window).on("load", function () {
    var firstCookie = Cookies.get('firstNameVal');
    if (firstCookie) {
        var inFifteenMinutes = new Date(new Date().getTime() + 10 * 60 * 1000);
        $('.first_last-name').text(firstCookie);
        $('.first-name').val(firstCookie);

        // let firstVal = $('.first-name').val();
        $('.first-name').on('keyup', function () {
            let firstName = $(this).val();
            Cookies.set('firstNameVal', firstName, {
                expires: inFifteenMinutes
            });
            $('.first_last-name').text(firstName);
            $('.first-name').val(firstName);
            Cookies.set('firstNameVal', firstName);
        });
        console.log('Got Val' + firstCookie);
    } else {
        $('.first-name').on('keyup', function () {
            let firstName = $(this).val();
            $('.first_last-name').text(firstName);
            Cookies.set('firstNameVal', firstName);
        });
        console.log('Got no Val');
    }
}); */

jQuery(document).ready(function ($) {

    /* Options Tabbing */
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current').fadeIn(1000);

    });

    tabContentHeight(); // Tab Content Height

    /* Template Switch */
    $('a.template-block').on('click', function(){
        let tempNum = $(this).data('temp');
        $('.email-template').removeClass('active');
        $('#' + tempNum).addClass('active');

        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    /* Name Change */
    $('.first-name').on('keyup', function(){
        let firstName = $(this).val();
        $('.first_last-name').text(firstName);
    });

    /* Job Title Change */
    $('.job-title').on('keyup', function () {
        let jobTitle = $(this).val();
        $('.job_title').text(jobTitle);
    });

    /* Company Name Change */
    $('.company-name').on('keyup', function () {
        let jobTitle = $(this).val();
        $('.company_name').text(jobTitle);
    });

    /* Company Number Change */
    $('.office-phone').on('keyup', function () {
        let companyNumber = $(this).val();
        $('.company_number').text(companyNumber);
        if (companyNumber.length > 0) {
            $('.company_number_img').show();
            $('.company_number').attr('href', 'tel:' + companyNumber);
        } else {
            $('.company_number_img').hide();
        }
    });
    jQuery('.office-phone').keypress(function (e) {
        var charCode = (e.which) ? e.which : e.keyCode;
        if (String.fromCharCode(charCode).match(/[^0-9]/g))
        return false;
    });

    /* Website URL Change */
    $('.website-url').on('keyup', function () {
        let websiteUrl = $(this).val();
        $('.website_url').text(websiteUrl);
        if (websiteUrl.length > 0 ) {
            $('.website_url_img').show();
            $('.website_url').attr('href', websiteUrl);
        } else {
            $('.website_url_img').hide();
        }
    });

    /* Email Change */
    $('.email').on('keyup', function () {
        let personalEmail = $(this).val();
        $('.personal_email').text(personalEmail);
        if (personalEmail.length > 0) {
            $('.personal_email_img').show();
            $('.personal_email').attr('href', 'mailto:' + personalEmail);
        } else {
            $('.personal_email_img').hide();
        }
    });

    /* Address Change */
    $('.company-address').on('keyup', function () {
        let userAddress = $(this).val();
        $('.user_address').text(userAddress);
        if (userAddress.length > 0) {
            $('.user_address_img').show();
        } else {
            $('.user_address_img').hide();
        }
    });

    /* Custom Field */
    $('.custom-field-text').on('keyup', function () {
        let customField = $(this).val();
        if (customField.length > 0) {
            $('.custom_field').show();
            $('.custom_field').text(customField);
        } else {
            $('.custom_field').hide();
        }
    });
    
    /* Social Link Change */
    $(document).on('keyup', '.linkedin-link', function () {
        let linkedinUrl = $(this).val();
        if (linkedinUrl.length > 0) {
            $('.linkedin-icon').show();
            $('.linkedin-icon').parent().show();
            $('.linkedin-icon').attr('href', linkedinUrl);
        } else {
            $('.linkedin-icon').hide();
        }
    });
    $('.facebook-link').on('keyup', function () {
        let facebookUrl = $(this).val();
        if (facebookUrl.length > 0) {
            $('.facebook-icon').show();
            $('.facebook-icon').parent().show();
            $('.facebook-icon').attr('href', facebookUrl);
        } else {
            $('.facebook-icon').hide();
            $('.facebook-icon').parent().hide();
        }
    });
    $('.twitter-link').on('keyup', function () {
        let twitterUrl = $(this).val();
        if (twitterUrl.length > 0) {
            $('.twitter-icon').show();
            $('.twitter-icon').parent().show();
            $('.twitter-icon').attr('href', twitterUrl);
        } else {
            $('.twitter-icon').hide();
            $('.twitter-icon').parent().hide();
        }
    });
    $('.instagram-link').on('keyup', function () {
        let instagramUrl = $(this).val();
        if (instagramUrl.length > 0) {
            $('.instagram-icon').show();
            $('.instagram-icon').parent().show();
            $('.instagram-icon').attr('href', instagramUrl);
        } else {
            $('.instagram-icon').hide();
            $('.instagram-icon').parent().hide();
        }
    });

    /* Hide Contact Icons */
    $('.hidec-label').on('click', function(){
        $('.hide-contact-icon').trigger('click');
    });
    $('.hide-contact-icon').on('change', function(){
        let hideIcon = $(this).is(":checked");
        if (hideIcon ) {
            $('.social-icon-td').hide();
        } else {
            $('.social-icon-td').show();
        }
    });

    /* Theme Color Change */
    $(document).on('keyup', '.theme-color', function () {
        let themeColor = $(this).val();
        $('.border-btm-theme').css('border-bottom', '1px solid' + themeColor);
        $('.border-right-theme').css('border-right', '1px solid' + themeColor);
        $('.image-theme').css('background-color', themeColor);
    });

    /* Font Color Change */
    $(document).on('keyup', '.font-color', function () {
        let fontColor = $(this).val();
        $('.font_props').css('color', fontColor);
    });

    /* Font Family Change */
    $(document).on('change', '#font-type', function () {
        let fontType = $(this).val();
        $('.font_props').css('font-family', fontType);
    });

    /* Link Color Change */
    $(document).on('keyup', '.link-color', function () {
        let linkColor = $(this).val();
        $('.social-item').css('background', linkColor);
    });

    /* Font Range */
    $(document).on('change', '.font-size-range', function () {
        let fontRange = $(this).val();
        if (fontRange == 14) {
            $('#pointSize').text('Small');
            $('.font_props').removeClass('font-s font-m font-l').addClass('font-s');
            $('p.font-s').css('font-size', fontRange + 'px');
            $('h3.font-s').css('font-size', (parseInt(fontRange) + 2) + 'px');
        } else if (fontRange == 16) {
            $('#pointSize').text('Medium');
            $('.font_props').removeClass('font-s font-m font-l').addClass('font-m');
            $('p.font-m').css('font-size', fontRange + 'px');
            $('h3.font-m').css('font-size', (parseInt(fontRange) + 2) + 'px');
        } else if (fontRange == 18) {
            $('#pointSize').text('Large');
            $('.font_props').removeClass('font-s font-m font-l').addClass('font-l');
            $('p.font-l').css('font-size', fontRange + 'px');
            $('h3.font-l').css('font-size', (parseInt(fontRange) + 2) + 'px');
        }
    });

    /* Company Logo */
    $(document).on('keyup', '.company-logo', function(){
        let companyLogo = $(this).val();
        $('.company_logo').attr('src', companyLogo);
        /* if ( companyLogo.length > 0 ) {
            $('.company_logo').attr('src', companyLogo);
            console.log( 'got Image!!' );
        } else {
            $('.company_logo').attr('src', 'https://threshmedia.com/wp-content/uploads/2021/11/company-logo.png');
            console.log( 'Placeholder Image!!' );
        } */
    }); 
    
    /* Profile Picture */
    $(document).on('keyup', '.profile-picture', function () {
        let profilePicture = $(this).val();
        $('.profile_picture').attr('src', profilePicture);
    });

    /* Clear All Fields */
    $(document).on('click', '#clear_fields', function(){
        $('.font_props').empty();
        $('.image-theme').hide();
        $('.social-item').hide();
        $('.social-item').parent().hide();
        $('.form-input input').val('');
        $('.company_logo, .profile_picture').attr('src', '');
        
    });

    /* Social Modal Popup */
    $('.social-modal').on('click', function(){
       let socialId = $(this).data('social');
       let socialText = $('#'+socialId).html();
        jQuery(".modal-wrap").css("display", "block");
        jQuery(".modal-wrap .modal-content").html(socialText);
        jQuery("body").addClass("modal-bg");
    });
    jQuery(".cancel").click(function () {
        jQuery(".modal-wrap").fadeOut();
        jQuery("body").removeClass("modal-bg");
        jQuery(".modal-wrap .modal-content").empty();
    });

});

/* Mouse Up  */
jQuery(document).mouseup(function (e) {

    /* Modal popup remove outside click */
    var container = jQuery(".modal-wrap");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
        jQuery("body").removeClass("modal-bg");
        jQuery(".modal-wrap .modal-content").empty();
    }
});

$(window).resize(function(){
    tabContentHeight();
});

/* Copy Signature Directly */
$(document).on('click', '#copy_signaure', function (e) {
    notification_box('Copied!', 'copy');
    e.preventDefault();
    var urlField = document.querySelector('.email-template.active table');
    var range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(urlField);

    window.getSelection().addRange(range);

    document.execCommand('copy');

    window.getSelection().removeRange(range);
});

/* Copy Signature HTML */
function copy_html_code(element) {
    notification_box('Copied!', 'copy');
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).html().replace(/\n\s+|\n/g, "")).select();
    document.execCommand("copy");
    $temp.remove();
}

/* Show Copy Text */
function notification_box( text, type ) {
    $('.notification-wrap').append('<div class="notification-text"><span>'+text+'</span></div>');
    $('.notification-wrap').addClass('active');
    $('.notification-text').addClass('active ' + type);
    setTimeout(function () {
        $('.notification-text').removeClass('active' + ' ' + type);
        $('.notification-wrap').removeClass('active');
        $('.notification-wrap').empty();
    }, 2000);   
}   

/* Show Second Step */
function sign_create() {

    var first_name = $('.first-name').val();
    var email = $('.email').val();
    var cimageurl = $('.company-logo').val();
    // var pimageurl = $('.profile-picture').val();

    /* Image URL RegEx */
    var regEx = /([a-zA-Z0-9\s_\\.\-:])+(.png|.jpg|.gif)/;
    var validCimageurl = regEx.test(cimageurl);
    // var validPimageurl = regEx.test(pimageurl);

    /* Email RegEx */
    var emailRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    var validEmail = emailRegEx.test(email);

    /* Website URL RegEx */
    var UrlRegEx = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
    var webUrl = $('.website-url').val();
    var validWebUrl = UrlRegEx.test(webUrl);

    /* Linked in URL */
    var linkedInUrl = $('.linkedin-link').val();
    var linkedinUrlValid = UrlRegEx.test(linkedInUrl);

    /* Twitter in URL */
    var twitterUrl = $('.twitter-link').val();
    var twitterUrlValid = UrlRegEx.test(twitterUrl);

    /* Facebook in URL */
    var facebookUrl = $('.facebook-link').val();
    var facebookUrlValid = UrlRegEx.test(facebookUrl);

     /* Instagram in URL */
     var instagramUrl = $('.instagram-link').val();
     var instagramUrlValid = UrlRegEx.test(instagramUrl);


    $(".error").remove();

    if ( first_name.length < 1 || 
        (email.length > 1 && !validEmail) || 
        (cimageurl.length > 1 && !validCimageurl ) || 
        (webUrl.length > 0 && !validWebUrl ) ||
        (linkedInUrl.length > 0 && !linkedinUrlValid ) ||
        (twitterUrl.length > 0 && !twitterUrlValid ) ||
        (facebookUrl.length > 0 && !facebookUrlValid ) ||
        (instagramUrl.length > 0 && !instagramUrlValid )
    ) {
        if (first_name.length == 0) {
            $('.first-name').after('<span class="error">This field is required</span>');
            notification_box('First Name is Required', 'error');
        }

        if (email.length > 1) {
            if (!validEmail) {
                $('.email').after('<span class="error">Enter a valid email</span>');
                notification_box('Enter a Valid Email', 'error');
            }
        } /* else {
            $('.email').after('<span class="error">This field is required</span>');
            notification_box('Email is Required', 'error');
        } */

        if (cimageurl.length > 1 && !validCimageurl ) {
            $('.company-logo').after('<span class="error">Enter a valid URL</span>');
            notification_box('Enter a valid Company Logo URL', 'error');
        }

        if (webUrl.length > 1 && !validWebUrl ) {
            $('.website-url').after('<span class="error">Enter a valid URL</span>');
            
            notification_box('Enter a valid Website URL(e.g. http://xyz.com)', 'error');
        }
        if (linkedInUrl.length > 0 && !linkedinUrlValid) {
            $('.linkedin-link').after('<span class="error">Enter a valid URL</span>');
            notification_box('Enter a valid Linkedin URL', 'error');
        }
        if (twitterUrl.length > 0 && !twitterUrlValid) {
            $('.twitter-link').after('<span class="error">Enter a valid URL</span>');
            notification_box('Enter a valid Twitter URL', 'error');
        }
        if (facebookUrl.length > 0 && !facebookUrlValid) {
            $('.facebook-link').after('<span class="error">Enter a valid URL</span>');
            notification_box('Enter a valid Facebook URL', 'error');
        }
        if (instagramUrl.length > 0 && !instagramUrlValid) {
            $('.instagram-link').after('<span class="error">Enter a valid URL</span>');
            notification_box('Enter a valid Instagram URL', 'error');
        }

        /* if (pimageurl.length > 1 && !validPimageurl) {
            $('.profile-picture').after('<span class="error">Enter a valid URL</span>');
            notification_box('Enter a valid Profile Image URL', 'error');
        } */

    } else {
        /* Second Step */
        $('.tabbing-block').fadeOut(500);
        $('.second-step-block').fadeIn(500);
    }

    /* if (url.length < 1) {
        $('.linkedin-link , .facebook-link').after('<span class="error">This field is required</span>');
    } else {
        var regEx = /(http(s)?:\\)?([\w-]+\.)+[\w-]+[.com|.in|.org]+(\[\?%&=]*)?/;;
        var validurl = regEx.test(url);
        if (!validurl) {
            $('.linkedin-link , .facebook-link').after('<span class="error">Enter a valid url</span>');
        }
    } */
}

/* Back to Editor */
function backtoeditor() {
    $('.tabbing-block').fadeIn(500);
    $('.second-step-block').fadeOut(500);
}

/* Color Picker */
var Chrome = VueColor.Chrome;
Vue.component('colorpicker', {
	components: {
		'chrome-picker': Chrome,
	},
	template: `
<div class="input-group form-input color-picker" ref="colorpicker">
	<input type="text" class="form-control" v-model="colorValue" @focus="showPicker()" @input="updateFromInput" />
	<span class="input-group-addon color-picker-container">
		<span class="current-color" :style="'background-color: ' + colorValue" @click="togglePicker()"></span>
		<chrome-picker :value="colors" @input="updateFromPicker" v-if="displayPicker" />
	</span>
</div>`,
	props: ['color'],
	data() {
		return {
			colors: {
				hex: '#000000',
			},
			colorValue: '',
			displayPicker: false,
		}
	},
	mounted() {
		this.setColor(this.color || '#000000');
	},
	methods: {
		setColor(color) {
			this.updateColors(color);
			this.colorValue = color;
		},
		updateColors(color) {
			if(color.slice(0, 1) == '#') {
				this.colors = {
					hex: color
				};
			}
			else if(color.slice(0, 4) == 'rgba') {
				var rgba = color.replace(/^rgba?\(|\s+|\)$/g,'').split(','),
					hex = '#' + ((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1);
				this.colors = {
					hex: hex,
					a: rgba[3],
				}
			}
		},
		showPicker() {
			document.addEventListener('click', this.documentClick);
			this.displayPicker = true;
		},
		hidePicker() {
			document.removeEventListener('click', this.documentClick);
			this.displayPicker = false;
		},
		togglePicker() {
			this.displayPicker ? this.hidePicker() : this.showPicker();
		},
		updateFromInput() {
			this.updateColors(this.colorValue);
		},
		updateFromPicker(color) {
			this.colors = color;
			if(color.rgba.a == 1) {
				this.colorValue = color.hex;
			}
			else {
				this.colorValue = 'rgba(' + color.rgba.r + ', ' + color.rgba.g + ', ' + color.rgba.b + ', ' + color.rgba.a + ')';
			}
		},
		documentClick(e) {
			var el = this.$refs.colorpicker,
				target = e.target;
			if(el !== target && !el.contains(target)) {
				this.hidePicker()
			}
		}
	},
	watch: {
		colorValue(val) {
			if(val) {
				this.updateColors(val);
				this.$emit('input', val);

				var s = document.getElementById('colorval');
                s.setAttribute('data-color', val);
                let datatext = this.$el.getAttribute('data-text');

                if (datatext == 'font_props' ) {
                    $('.font_props').css('color', val);
                } else if (datatext == 'social-item') {
                    $('.social-item').css('background', val);
                } else if (datatext == 'theme_color') {
                    $('.border-right-theme').css('border-right', '1px solid ' + val);
                    $('.border-btm-theme').css('border-bottom', '1px solid ' + val);
                    $('.image-theme').css('background-color', val);
                }
			}
		}
	},
});
new Vue({
    el: '#linkcolor',
	data: {
        defaultColor: '#6D7FE2'
	}
});
new Vue({
    el: '#textcolor',
	data: {
		defaultColor: '#000'
	}
});
new Vue({
    el: '#themecolor',
    data: {
        defaultColor: '#6D7FE2'
    }
});

/* Field Cookie Setting */
function setCookie(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + (1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/* Dynamic Height of Tab Content */
function tabContentHeight() {
    let windowHeight = $( window ).height();
    let vh = windowHeight / 100;
    let tabHeight = 100 - ( $('ul.tabs').height() / vh );
    $('.tab-content').css('height', tabHeight + 'vh');
}