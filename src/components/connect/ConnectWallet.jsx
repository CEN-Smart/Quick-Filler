import React, { useState, useEffect } from "react";
import { Xumm } from "xumm";

const xumm = new Xumm("8d01558e-d605-4165-8a35-c0a8763800a8");

function ConnectWallet() {
  const [account, setAccount] = useState("");

  useEffect(() => {
    async function output() {
      if (window.localStorage.getItem("xumm_address") !== null) {
        const _account = localStorage.getItem("xumm_address");
        setAccount(_account);
        console.log("account on first render is ", account);
      }
    }
    output();
  }, []);

  xumm.user.account.then((a) => {
    setAccount(a ?? "");
    console.log("about to set account");
    localStorage.setItem("xumm_address", account);
  });

  const logout = () => {
    xumm.logout();
    setAccount("");
    login();
  };
  const login = async () => {
    if (window.localStorage.getItem("xumm_address") !== null) {
      const _account = localStorage.getItem("xumm_address");
      console.log(_account);
      if (_account.length == 0) {
        xumm.authorize();
      }
      setAccount(_account);
    } else {
      await xumm.authorize();
    }
  };

  return (
    <div>
      {account === "" && !xumm.runtime.xapp ? (
        <button onClick={login} className="button">
          Connect Wallet
        </button>
      ) : (
        ""
      )}
      {account !== "" ? (
        <>
          <button onClick={logout} className="button">
            Disconnect
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default ConnectWallet;
