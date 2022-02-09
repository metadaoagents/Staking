import React, { Component } from "react";
import dai from "../dai.png";
import chainlink from "../chainlink.png";
import dappImage from "../farmer.png";

class Main extends Component {
  render() {
    return (
      <div id="content" className="mt-3">
        <table className="table table-borderless text-muted text-center">
          <thead>
            <tr>
              <th scope="col" className='text-white'>Staking Balance {this.props.tokenName}</th>
              <th scope="col" className='text-white'>Reward Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td  className='text-white'>
                {window.web3.utils.fromWei(this.props.stakingBalance, "Ether")}{" "}
                {this.props.tokenName}
              </td>
              <td className='text-white'>
                {window.web3.utils.fromWei(
                  this.props.dappTokenBalance,
                  "Ether"
                )}{" "}
                REWARD TOKEN
              </td>
            </tr>
          </tbody>
        </table>

        <div className="card mb-4">
          <div className="card-body">
            <form
              className="mb-3"
              onSubmit={(event) => {
                event.preventDefault();
                let amount;
                amount = this.input.value.toString();
                amount = window.web3.utils.toWei(amount, "Ether");
                this.props.stakeTokens(amount, this.props.tokenAddress);
              }}
            >
              <div>
              <form>
                  Accepted Token for Staking: <label for="chainlink"> &nbsp; </label>
                  <input
                    type="button"
                    id="chainlink"
                    name="token"
                    value="Chainlink"
                    onClick={(event) => {
                      event.preventDefault();
                      this.props.changeToken(
                        "0xa36085F69e2889c224210F603D836748e7dC0088",
                        "LINK",
                        chainlink
                      );
                      //this.props.updateBalance(this.props.tokenAddress);
                    }}
                  />
                  {/* <label for="fau"> &nbsp;&nbsp;&nbsp;&nbsp;</label>
                  <input
                    type="button"
                    id="fau"
                    name="token"
                    value="fau"
                    onClick={(event) => {
                      event.preventDefault();
                      this.props.changeToken(
                        "0xfab46e002bbf0b4509813474841e0716e6730136",
                        "FAU",
                        dai
                      );
                      //this.props.updateBalance(this.props.tokenAddress);
                    }}
                  /> */}
                  <label for="dapptoken"> &nbsp;&nbsp;&nbsp; &nbsp;</label>
                  <input
                    type="button"
                    id="dapptoken"
                    name="token"
                    value="Reward Token"
                    onClick={(event) => {
                      event.preventDefault();
                      this.props.changeToken(
                        this.props.dappTokenAddress,
                        "RWT",
                        dappImage
                      );
                      //this.props.updateBalance(this.props.tokenAddress);
                    }}
                  />
                </form>
                <label className="float-left">
                  <b>Stake Tokens</b>
                </label>
                <span className="float-right text-muted">
                  {window.web3.utils.fromWei(this.props.erc20Balance, "Ether")}
                </span>
              </div>
              <div className="input-group mb-4">
                <input
                  type="text"
                  ref={(input) => {
                    this.input = input;
                  }}
                  className="form-control form-control-lg"
                  placeholder="0"
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <img src={this.props.image} height="32" alt="" />
                    &nbsp;&nbsp;&nbsp; {this.props.tokenName}
                  </div>
                </div>
              </div>
              <div className="input-group mb-4">
               
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                STAKE TOKENS!
              </button>
            </form>
            <button
              type="submit"
              className="btn btn-link btn-block btn-sm"
              onClick={(event) => {
                event.preventDefault();
                this.props.unstakeTokens(this.props.tokenAddress);
              }}
            >
              REMOVE STAKED TOKENS
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
