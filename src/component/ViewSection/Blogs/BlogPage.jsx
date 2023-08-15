import React from 'react';
import './Blog.css';
import viewLeftimage from '../../../Images/viewLeftimage.png';
import { FiTwitter } from 'react-icons/fi';
import { CiFacebook } from 'react-icons/ci';
import { FaTelegramPlane } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiDiscordFill } from 'react-icons/ri';
import { TfiReddit, TfiWorld } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
// import { GoPrimitiveDot } from 'react-icons/go';
// import { Card } from 'antd';
import { GrFormDown } from 'react-icons/gr';
// import Footer from '../../footer/Footer';
import { CChart } from '@coreui/react-chartjs';
import BlogCollapse from './BlogCollapse';

const Blog = () => {
  return (
    <div className="container-fluit main_blog_page">
      <div className="view_main">
        <div className="view_details_left_main">
          <div>
            <div className="view_details_left">
              <div className="view_content_left">
                <div className="view_content_left_image">
                  <img
                    className="view_left_image"
                    src={viewLeftimage}
                    alt="view left image"
                  />
                </div>
              </div>
              <div className="view_content_right">
                <div className="audit_section">
                  <h2>Snoopy Inu Fair Launch</h2>
                  <div className="icon_section">
                    <ul className="_flex">
                      <li>
                        <Link to="">
                          <TfiWorld size={'20'} color="#FA6200" />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FiTwitter size={'20'} color="#FA6200" />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <CiFacebook size={'20'} color="#FA6200" />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FaTelegramPlane size={'20'} color="#FA6200" />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <FiGithub size={'20'} color="#FA6200" />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <AiOutlineInstagram size={'20'} color="##FA6200" />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <RiDiscordFill size={'20'} color="#FA6200" />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <TfiReddit size={'20'} color="#FA6200" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sale_live_button_section">
                  <div className="sale_live_icon">
                    <Link
                      style={{
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: 'rgb(0, 188, 212)',
                        borderRadius: '3px',
                        textTransform: 'capitalize',
                        padding: '3px 5px',
                        color: '#ffffff',
                      }}
                    >
                      audit
                    </Link>
                    <div className="heartbtnholder">
                      <div className="heart">
                        <AiOutlineHeart />
                      </div>
                      <div className="sale_live_button">
                        <button
                          style={{
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            width: '85px',
                            cursor: 'pointer',
                            backgroundColor: '#FDFAEA',
                            borderRadius: '12px',
                            textTransform: 'capitalize',
                            padding: ' 4px 5px',
                            color: '#D29813;',
                          }}
                        >
                          {/**
                      
                          <GoPrimitiveDot
                            size={'14px'}
                            color="rgb(18 185 129)"
                          />
                           */}
                          sale live
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="para">
              <p>
                𝐒𝐧𝐨𝐨𝐩𝐲 𝐢𝐬 𝐚 𝐡𝐨𝐮𝐬𝐞𝐡𝐨𝐥𝐝 𝐧𝐚𝐦𝐞, 𝐚𝐧𝐝 𝐢𝐭'𝐬 𝐭𝐢𝐦𝐞 𝐭𝐨 𝐠𝐨 𝐭𝐨 𝐭𝐡𝐞 𝐦𝐨𝐨𝐧!🚀
                𝐀𝐢𝐦𝐢𝐧𝐠 𝐭𝐨 𝐛𝐞 𝐭𝐡𝐞 𝐧𝐞𝐱𝐭 𝐭𝐨𝐩 𝐦𝐞𝐦𝐞 𝐭𝐨𝐤𝐞𝐧! 👑𝐒𝐜𝐡𝐮𝐥𝐭𝐳 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐭𝐡𝐞
                𝐢𝐦𝐚𝐠𝐞 𝐨𝐟 𝐒𝐧𝐨𝐨𝐩𝐲 𝐨𝐧 𝐭𝐡𝐞 𝐦𝐨𝐨𝐧, 𝐍𝐀𝐒𝐀 𝐚𝐥𝐬𝐨 𝐦𝐚𝐝𝐞 𝐒𝐧𝐨𝐨𝐩𝐲 𝐚𝐧
                𝐚𝐦𝐛𝐚𝐬𝐬𝐚𝐝𝐨𝐫,🌈 𝐞𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠 𝐢𝐬 𝐡𝐞𝐥𝐩𝐢𝐧𝐠 𝐭𝐨 𝐩𝐮𝐬𝐡 𝐒𝐧𝐨𝐨𝐩𝐲 𝐭𝐨 𝐭𝐡𝐞
                𝐦𝐨𝐨𝐧!🌕
              </p>
            </div>
            <div className="address_details">
              <table>
                <tr>
                  <td className="address_list">Presale Address</td>
                  <td className="text-right">
                    <a href="">0x9541B7BfA98bb0aEbc0a9D68A08A5e9fBfC957Ae</a>
                  </td>
                </tr>
                <tr>
                  <td className="address_list">Token Name</td>
                  <td className="text-right">Snoopy Inu</td>
                </tr>
                <tr>
                  <td className="address_list">Token Symbol</td>
                  <td className="text-right">Snoopy</td>
                </tr>
                <tr>
                  <td className="address_list">Token Decimals</td>
                  <td className="text-right">18</td>
                </tr>
                <tr>
                  <td className="address_list">Token Address</td>
                  <td className="text-right">
                    <a href="">0x9541B7BfA98bb0aEbc0a9D68A08A5e9fBfC957Ae</a>
                  </td>
                </tr>
                <tr>
                  <td className="address_list">Total Supply</td>
                  <td className="text-right">420,690,000,000,000 Snoopy</td>
                </tr>
                <tr>
                  <td className="address_list">Tokens For Presale</td>
                  <td className="text-right">226,710,676,995,622 Snoopy</td>
                </tr>
                <tr>
                  <td className="address_list">Tokens For Liquidity</td>
                  <td className="text-right">109,841,323,004,378.86 Snoopy</td>
                </tr>
                <tr>
                  <td className="address_list">
                    Initial Market Cap (estimate)
                  </td>
                  <td className="text-right">$12,206</td>
                </tr>
                <tr>
                  <td className="address_list">Soft Cap</td>
                  <td className="text-right">10 BNB</td>
                </tr>
                <tr>
                  <td className="address_list">Presale Start Time</td>
                  <td className="text-right">2023.05.30 06:30 (UTC)</td>
                </tr>
                <tr>
                  <td className="address_list">Presale End Time</td>
                  <td className="text-right">2023.06.02 14:00 (UTC)</td>
                </tr>
                <tr>
                  <td className="address_list">Listing On</td>
                  <td className="text-right">
                    <a href="">Pancakeswap</a>
                  </td>
                </tr>
                <tr>
                  <td className="address_list">Liquidity Percent</td>
                  <td className="text-right">51%</td>
                </tr>
                <tr>
                  <td className="address_list">Liquidity Lockup Time</td>
                  <td className="text-right">00 days after pool ends</td>
                </tr>
                <tr></tr>
              </table>
            </div>
          </div>
          <div className="antd_card">
            <div className="ant-card-body ">
              <div className="has-text-centered">
                <div
                  style={{
                    maxWidth: 400,
                    margin: 'auto',
                    // height: 300,
                    // overflowY: "hidden"
                  }}
                >
                  <div className="TokenMetric_root__29Tdv">
                    <CChart
                      type="doughnut"
                      options={{
                        plugins: {
                          datalabels: {
                            anchor: 'end',
                            align: 'end',
                            color: 'black',
                            font: {
                              weight: 'bold',
                            },
                          },
                        },
                      }}
                      data={{
                        labels: ['Red', 'Blue', 'Yellow', 'Black'],
                        datasets: [
                          {
                            label: 'My First Dataset',
                            data: [300, 50, 100, 40],
                            backgroundColor: [
                              'rgb(255, 99, 132)',
                              'rgb(54, 162, 235)',
                              'rgb(255, 205, 86)',
                              'rgb(4, 4, 4)',
                            ],
                            rotation: 45,
                            hoverOffset: 4,
                          },
                        ],
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq_section">
            <div className="ant-card-head-wrapper">
              <div className="ant-card-head-title">
                <h3>Frequently Asked Question</h3>
              </div>
            </div>
            <BlogCollapse />
          </div>
        </div>
        <div className="view_details_right">
          <div className="cart_div">
            <div className="cart_heading_div">
              <p>Make sure the website is MetaSale.finance!</p>
            </div>
            <div className="timer_div">
              <div>
                <p>Presale Starts In</p>
                <div className="timer_inner_div">
                  <div className="tm_div">
                    <p>00</p>
                  </div>
                  <div className="tm_div">
                    <p>00</p>
                  </div>
                  <div className="tm_div">
                    <p>00</p>
                  </div>
                  <div className="tm_div">
                    <p>00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="progress_outer">
              <div className="progress_inner"></div>
            </div>
            <div className="bnb">
              <div>0 BNB</div>
              <div>20 BNB</div>
            </div>
            <form action="">
              <label htmlFor="Amount">
                <strong>Amount</strong>
              </label>
              <br />
              <input type="text" />
            </form>
            <div className="connect_wallet_button">
              <button className="connect_wallet">Connect Wallet</button>
            </div>
          </div>
          <div className="cart_view">
            <div className="status_timeline_main">
              <div className="point"></div>
              <div className="status_timeline"></div>
              <div className="point"></div>
            </div>
            <div className="forward_icon">
              <a href="">
                <GrFormDown className="down_arrow" />
              </a>
            </div>
            <div className="teable_data">
              <table>
                <tr>
                  <td className="address_list">Status</td>
                  <td className="text-right change_color">incoming</td>
                </tr>
                <tr>
                  <td className="address_list">Sale Type</td>
                  <td className="text-right change_color">public</td>
                </tr>
                <tr>
                  <td className="address_list">Current Rate</td>
                  <td className="text-right">N/A</td>
                </tr>
                <tr>
                  <td className="address_list">Max Contribution</td>
                  <td className="text-right">25 BNB</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="cart_view">
            <div className="owner_zone">
              <p>Owner Zone</p>
            </div>
            <div className="owner_zone_description">
              <div className="paragraph_section">
                <p>
                  To make sure there will be no issues during the presale time,
                  please do not send tokens to wallets before you finalize the
                  presale pool.
                </p>
              </div>
              <div className="pool_free_section">
                <p>Pool Fee: 5% BNB raised only</p>
              </div>
              <div className="sale_Type_input">
                <label className="sale_type" htmlFor="saletype">
                  Sale Type
                </label>
                <div className="checkbutton">
                  <span>
                    <input className="public" type="radio" />
                  </span>
                  <span className="public_text">Public</span>
                  <span>
                    <input className="whitelist" type="radio" />
                  </span>
                  <span className="whitelist_text">Whitelist</span>
                </div>
                <div className="pool_action_main">
                  <label htmlFor="Pool Actions">
                    <strong>Pool Actions</strong>
                  </label>
                  <div className="pool_action_details">
                    <a href="#">Enable aFFILIATE Program</a>
                  </div>
                  <div className="pool_action_details">
                    <a href="#">ool Start/End Time Setting</a>
                  </div>
                  <div
                    className="pool_action_details"
                    style={{ backgroundColor: '#f5f5f5' }}
                  >
                    <a href="#">Finalize</a>
                  </div>
                  <div className="pool_action_details">
                    <a href="#">ancel Pool</a>
                  </div>
                </div>
                <div className="bottom_text">
                  <p>
                    To Finalize presale, you have to exclude token transfer fee
                    for presale contract.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Blog;
