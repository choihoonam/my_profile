import React, { Component } from "react";
import Slider from "react-slick";
import $ from 'jquery';
window.$ = window.jQuery = require('jquery');

export default class Contents extends Component {
    componentDidMount() {
        this.mainTab();
    }
    mainTab = () => {
        const $mainTab = $('.mainTab');

        if($mainTab.length > 0){	
            const _TabOffset = $mainTab.offset().top;		

            $mainTab.find('button').on('click', function() {			
                
                if ($(this).is('[data-target]')){
                    $('.fullDim').trigger('click');
                    const _target = $(this).attr('data-target');
                    const _text = $(this).text();
                    $('#prjTit').html(_text);
                    
                    const _offsetTop = $('#'+_target).offset().top + 17 +'px';
                    
                    $('html,body').off().animate({scrollTop : _offsetTop} , 300);
                    return false;
                }
            });
            

            $(window).scroll(function(){
                const _bodyScrTop = $(this).scrollTop();
                
                if(_bodyScrTop >= _TabOffset){
                    $mainTab.addClass('tabFixed');
                }else{				
                    $mainTab.removeClass('tabFixed');
                    $('#prjTit').text('Project( );');
                }

                $('.tabCon').each(function(index){
                    const _offset = $(this).offset().top;
                    const _text = $(this).find('h2').text();

                    if(_bodyScrTop >= _offset){
                        $('#prjTit').text(_text);
                        $('.tabSt1 li').removeClass('active');			
                        $('.tabSt1 li').eq(index).addClass('active');
                    }
                })
                
            });		
            
        }
    }
    openMenu = () => {
        const $container = $('.tabMemu'),
            $backdrop = $container.find('.fullDim'),
            $wrapper = $container.find('.fullMenu');

        const offsetTop = $('.btnTabMemu').offset().top;

        $container.addClass('on')
            .off('touchmove').on('touchmove', function (e) { return false; });

        setTimeout(function () {
            $backdrop.addClass('on')
                .off('click').on('click', function () {
                    setTimeout(function () {
                        $backdrop.removeClass('on');
                        $wrapper.removeClass('on');
                    }, 0);

                    setTimeout(function () {
                        $container.removeClass('on');
                    }, 300);
                });

            $wrapper.addClass('on');
        }, 300);

        $('html,body').off().animate({ scrollTop: offsetTop }, 300);
        return false;

    }
    render() {
        const settings = {
            customPaging: function (i) {
                return (
                    <span className="btn-counts">{i + 1} / {this.slideCount} </span>
                );
            },
            infinite: false,
            arrows: true,
            autoplay: false,
            edgeFriction: 0,
            dots: true,
        };
        return (
            <div className="contents">

                <div className="mainTab">
                    <div className="inner">
                        <p className="tit" id="prjTit">Project( );</p>
                        <button className="btnTabMemu" onClick={this.openMenu}>
                            <span className="slice1"></span>
                            <span className="slice2"></span>
                            <span className="slice3"></span>
                        </button>
                        <div className="tabMemu">
                            <div className="fullDim"></div>
                            <div className="fullMenu">
                                <ul className="tab tabSt1">
                                    <li className="active"><button data-target="tabCon1">Hybrid App</button></li>
                                    <li><button data-target="tabCon2">Mobile Web</button></li>
                                    <li><button data-target="tabCon3">Responsive Web</button></li>
                                    <li><button data-target="tabCon4">Pc Web</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                
				
				<div className="tabCon" id="tabCon1">
                    <div className="inner">
                        <h2>Hybrid App</h2>

                        <div className="prjWrap">
                            <div className="prjInfo">
                                <h3>스마트플래너 고도화</h3>
                                <ul>
                                    <li><strong>작업년도 :</strong> 2020</li>
                                    <li><strong>작업기간 :</strong> 2M</li>
                                    <li><strong>페이지수 :</strong> 36P</li>
                                    <li><strong>기여도 :</strong> 100%</li>
                                    <li>
                                        <span className="tag">html5</span>
                                        <span className="tag">css3</span>
                                        <span className="tag">javascript</span>
                                        <span className="tag">svg animation</span>
                                        <span className="tag">graph animation</span>
                                    </li>
                                </ul>
                            </div>
                            <Slider {...settings} className="prjView ipad slide">
                                <div className="item"><img src={require('../assets/images/prj2020_02_01.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2020_02_02.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2020_02_03.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2020_02_04.png')} alt="" /></div>
                            </Slider>
                        </div>
                        <div className="prjWrap">
                            <div className="prjInfo">
                                <h3>ZUMO APP 카드뉴스</h3>
                                <ul>
                                    <li><strong>작업년도 :</strong> 2019</li>
                                    <li><strong>작업기간 :</strong> 1Y</li>
                                    <li><strong>페이지수 :</strong> 카운팅불가</li>
                                    <li><strong>기여도 :</strong> 100%</li>
                                    <li>
                                        <span className="tag">html5</span>
                                        <span className="tag">css3</span>
                                        <span className="tag">javascript</span>
                                        <span className="tag">slick library</span>
                                    </li>
                                </ul>
                            </div>
                            <Slider {...settings} className="prjView mobile slide">
                                <div className="item">
                                    <video className="video" src={require('../assets/images/prj2019_02_01.mp4')} muted controls></video>
                                </div>
                                <div className="item">
                                    <video className="video" src={require('../assets/images/prj2019_02_02.mp4')} muted controls></video>
                                </div>
                                <div className="item">
                                    <video className="video" src={require('../assets/images/prj2019_02_03.mp4')} muted controls></video>
                                </div>
                            </Slider>	
                        </div>
                    </div>
				</div>


                <div className="tabCon" id="tabCon2">
                    <div className="inner">
                        <h2>Mobile Web</h2>
                        <div className="prjWrap">
                            <div className="prjInfo">
                                <h3>한화생명 스마트청약</h3>
                                <ul>
                                    <li><strong>작업년도 : 2020</strong></li>
                                    <li><strong>작업기간 : 4M</strong></li>
                                    <li><strong>페이지수 : 85P</strong></li>
                                    <li><strong>기여도 : 100%</strong></li>
                                    <li>
                                        <span className="tag">html5</span>
                                        <span className="tag">css3</span>
                                        <span className="tag">javascript</span>
                                        <span className="tag">pinch zoom</span>
                                    </li>
                                </ul>
                            </div>
                            <Slider {...settings} className="prjView mobile slide">
                                <div className="item"><img src={require('../assets/images/prj2020_01_01.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2020_01_02.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2020_01_03.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2020_01_04.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2020_01_05.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2020_01_06.png')} alt="" /></div>
                            </Slider>
                        </div>
                        <div className="prjWrap">
                            <div className="prjInfo">
                                <h3>필리핀 Globe RBT</h3>
                                <ul>
                                    <li><strong>작업년도 : 2017</strong></li>
                                    <li><strong>작업기간 : 1M</strong></li>
                                    <li><strong>페이지수 : 15P</strong></li>
                                    <li><strong>기여도 : 100%</strong></li>
                                    <li>
                                        <span className="tag">html5</span>
                                        <span className="tag">css3</span>
                                        <span className="tag">javascript</span>
                                    </li>
                                </ul>
                            </div>
                            <Slider {...settings} className="prjView mobile slide">
                                <div className="item">
                                    <video className="video" src={require('../assets/images/prj2017_01_01.mp4')} poster={require('../assets/images/prj2017_01_01.png')} muted controls></video>
                                </div>
                                <div className="item"><img src={require('../assets/images/prj2017_01_01.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2017_01_02.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2017_01_03.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2017_01_04.png')} alt="" /></div>
                            </Slider>
                        </div>
                    </div>
                </div>

                <div className="tabCon" id="tabCon3">
                    <div className="inner">
                        <h2>Responsive Web</h2>
                        <div className="prjWrap">
                            <div className="prjInfo">
                                <h3>국민건강보험 건강보험자료 공유서비스</h3>
                                <ul>
                                    <li><strong>작업년도 : 2018</strong></li>
                                    <li><strong>작업기간 : 2M</strong></li>
                                    <li><strong>페이지수 : 113P(5% responsive)</strong></li>
                                    <li><strong>기여도 : 80%</strong></li>
                                    <li>
                                        <span className="tag">html5</span>
                                        <span className="tag">css3</span>
                                        <span className="tag">javascript</span>
                                        <span className="tag">responsive</span>
                                    </li>
                                </ul>
                            </div>
                            <Slider {...settings} className="prjView pc slide">
                                <div className="item"><img src={require('../assets/images/prj2018_01_01.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2018_01_02.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2018_01_03.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2018_01_04.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2018_01_05.png')} alt="" /></div>
                            </Slider>
                            <Slider {...settings} className="prjView mobile slide">
                                <div className="item"><img src={require('../assets/images/prj2018_01_01_m.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2018_01_02_m.png')} alt="" /></div>
                            </Slider>
                        </div>
                        <div className="prjWrap">
                            <div className="prjInfo">
                                <h3>트레빗 해외가상화페거래소</h3>
                                <ul>
                                    <li><strong>작업년도 : 2018</strong></li>
                                    <li><strong>작업기간 : 3M</strong></li>
                                    <li><strong>페이지수 : 65P(97% responsive)</strong></li>
                                    <li><strong>기여도 : 100%</strong></li>
                                    <li>
                                        <span className="tag">html5</span>
                                        <span className="tag">css3</span>
                                        <span className="tag">javascript</span>
                                        <span className="tag">responsive</span>
                                    </li>
                                </ul>
                            </div>
                            <Slider {...settings} className="prjView mobile slide">
                                <div className="item"><img src={require('../assets/images/prj2018_02_01_m.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2018_02_02_m.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2018_02_03_m.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2018_02_04_m.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2018_02_05_m.png')} alt="" /></div>
                            </Slider>
                            <Slider {...settings} className="prjView pc slide">
                                <div className="item"><img src={require('../assets/images/prj2018_02_01.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2018_02_02.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2018_02_03.png')} alt="" /></div>
                            </Slider>
                        </div>
                    </div>
                </div>

                <div className="tabCon" id="tabCon4">
                    <div className="inner">
                        <h2>Pc Web</h2>
                        <div className="prjWrap">
                            <div className="prjInfo">
                                <h3>서울사랑 사이트관리 어드민</h3>
                                <ul>
                                    <li><strong>작업년도 : 2019</strong></li>
                                    <li><strong>작업기간 : 1M</strong></li>
                                    <li><strong>페이지수 : 60P</strong></li>
                                    <li><strong>기여도 : 100%</strong></li>
                                    <li>
                                        <span className="tag">html5</span>
                                        <span className="tag">css3</span>
                                        <span className="tag">javascript</span>
                                    </li>
                                </ul>
                            </div>
                            <Slider {...settings} className="prjView pc slide">
                                <div className="item"><img src={require('../assets/images/prj2019_01_01.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2019_01_02.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2019_01_03.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2019_01_04.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2019_01_05.png')} alt="" /></div>
                                <div className="item"><img src={require('../assets/images/prj2019_01_06.png')} alt="" /></div>
                            </Slider>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}