import React, { useState } from "react";
import "./TokenAddress.css";
import { Checkbox, Form, Input, Modal, Radio, Space, Spin } from "antd";
import DeFiLaunchpadInfo from "../DeFiLaunchpadInfo/DeFiLaunchpadInfo";
import AddAdditionalInfo from "../AddAdditionalInfo/AddAdditionalInfo";
import Finished from "../Finished/Finished";
import { useSelector, useDispatch } from "react-redux";
import { fetchTokenDetails } from "../../../App/redux/features/createToken/createTokenSlice";
import CreateToken from "../../CreateToken/CreateToken";
import {
  addLounchPadData,
  validateForm1,
} from "../../../App/redux/features/lounchPad/LounchPadSlice";
import { lounchPadFormSelector } from "../../selector/selector";
import { LoadingOutlined } from "@ant-design/icons";

const TokenAddress = () => {
  const [modelCreated, setModelCreated] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const [currency, setValue] = useState("BNB");
  const [affilate, setaffilate] = useState("Disable");
  const [listingType, setlistingType] = useState("AUTO");
  const [isLoading, setIsLoading] = useState(true);
  const [fee, setfee] = useState("");
  const [form] = Form.useForm();

  const modalHandle = () => {
    setIsopen(true);
  };
  const modalHandleCancel = () => {
    setIsopen(false);
  };

  const initialValues = {
    Currency: "",
    PaymentOption: "",
    facebook: "",
    twitter: "",
    Github: "",
    telegram: "",
    instagram: "",
    discord: "",
    Reddit: "",
    Youtube: "",
    description: "",
  };

  const dispatch = useDispatch();
  const tokenDetails = useSelector((state) => state.user.tokenDetails);
  const lounchPadTab = useSelector(lounchPadFormSelector);
  const onChange = (e) => {
    console.log(`checked = ${e.target.value}`);
  };

  const validate = () => {
    form.validateFields();
  };

  const handeltokenAddress = async (value) => {
    dispatch(fetchTokenDetails(value));
  };

  const handleNextBtn = () => {
    form.validateFields().then((values) => {
      dispatch(addLounchPadData(values));
      dispatch(addLounchPadData(tokenDetails));
      dispatch(validateForm1());
    });
  };

  return (
    <>
      <Modal open={isOpen} footer={null} onCancel={modalHandleCancel}>
        <CreateToken />
      </Modal>

      <div className="container">
        {lounchPadTab.lounchPadData?.lounchpadForm === 1 ? (
          <DeFiLaunchpadInfo />
        ) : lounchPadTab.lounchPadData?.lounchpadForm === 2 ? (
          <AddAdditionalInfo />
        ) : lounchPadTab.lounchPadData?.lounchpadForm === 3 ? (
          <Finished />
        ) : (
          <Form form={form} onFinish={validate}>
            <div className="sub-container">
              <p className="required">(*) is required field.</p>
              <div>
                <div className="address_token">
                  <p>
                    Token address <sup className="required">*</sup>
                  </p>
                  <div>
                    <button onClick={modalHandle}>Create Model</button>
                    {modelCreated && <p>Model created successfully!</p>}
                  </div>
                </div>
                <div></div>
              </div>
              <div className="inputBox">
                <Form.Item name={"address"}  rules={[{ required: true, message: "token address is required"}]}>
                  <Input
                    type="text"
                    onChange={(e) => {
                      handeltokenAddress(e.target.value);
                    }}
                  />
                </Form.Item>
                {isLoading && <Spin indicator={<LoadingOutlined />} />}
                <p className="pool">Pool creation fee: 1 BNB</p>
              </div>
              {tokenDetails && (
                <table>
                  <tr>
                    <td>Name</td>
                    <td className="text-right">
                      <a href="/">{tokenDetails?.name}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Symbol</td>
                    <td className="text-right">{tokenDetails?.symbol}</td>
                  </tr>
                  <tr>
                    <td>Decimal</td>
                    <td className="text-right">{tokenDetails?.decimals}</td>
                  </tr>
                </table>
              )}

              <div></div>
              <div className="chechboxDiv">
                <h3 className="currency">Currency</h3>

                <Form.Item name="Currency">
                  <Radio.Group
                    onChange={onChange}
                    value={currency}
                    defaultValue={"BNB"}
                  >
                    <Space direction="vertical">
                      <Radio value={"BNB"}>BNB</Radio>
                      <Radio value={"BUSD"}>BUSD</Radio>
                      <Radio value={"USDT"}>USDT</Radio>
                      <Radio value={"USDC"}>USDC</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </div>
              <p className="pool">Users will pay with BNB for your token</p>

              <div className="chechboxDiv">
                <h3 className="currency">Fee Options</h3>
                <Form.Item name="PaymentOption">
                  <Radio.Group onChange={onChange} value={fee} defaultValue={"BNB"}>
                    <Space direction="vertical">
                      <Radio onChange={onChange} value={"BNB"}>
                        5% BNB raised only{" "}
                        <span className="pool">(Recommended)</span>
                      </Radio>
                      <Radio onChange={onChange} value={"Other"}>
                        Others
                      </Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </div>
              <div className="chechboxDiv">
                <h3 className="currency">Listing Options</h3>
                <Form.Item name="listingType">
                  <Radio.Group
                    onChange={onChange}
                    value={listingType}
                    defaultValue={"Auto"}
                  >
                    <Space direction="vertical">
                      <Radio value={"Auto"}>Auto Listing</Radio>
                      <Radio value={"Manual"}>Manual listing</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </div>

              <div className="chechboxDiv">
                <h3 className="currency">Affiliate Program</h3>
                <Form.Item name="affilateStatus">
                  <Radio.Group
                    onChange={onChange}
                    value={affilate}
                    defaultValue={"Disabled"}
                  >
                    <Space direction="vertical">
                      <Radio value={"Disabled"}>Disable Affilate</Radio>
                      <Radio value={"Enabled"}>Enable Affilate</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </div>

              <div className="req-footer">
                <p>
                  For auto listing, after you finalize the pool your token will
                  be auto listed on DEX.
                </p>
              </div>
              <div className="nextBtn">
                <button onClick={handleNextBtn}>Next</button>
              </div>
            </div>
          </Form>
        )}
      </div>
    </>
  );
};

export default TokenAddress;
