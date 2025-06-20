import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const success = searchParams.get("success");
  const { url } = useContext(StoreContext);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const verifyPayment = async () => {
    const response = await axios.post(
      url + "/api/order/verify",
      {
        success,
        orderId,
      },
      {
        headers: { token },
      }
    );
    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    verifyPayment();
  }, []);
  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
