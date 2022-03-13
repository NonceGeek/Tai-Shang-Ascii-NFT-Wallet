import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/WeLightProject/Tai-Shang-Ascii-NFT-Wallet" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="TaiShang Ascii Handler"
        subTitle="handle Ascii to html page, NFT and actual Model by 3D printer!"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
