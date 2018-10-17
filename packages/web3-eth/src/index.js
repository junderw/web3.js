/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

"use strict";

var version = require('./package.json').version;
var MethodModelFactory = require('./factories/MethodModelFactory');
var Eth = require('./Eth');
var NetPackage = require('web3-net');
var ContractPackage = require('web3-eth-contract');
var AccountsPackage = require('web3-eth-accounts');
var PersonalPackage = require('web3-eth-personal');
var ENSPackage = require('web3-eth-ens');
var AbiPackage = require('web3-eth-abi');
var SubscriptionsPackage = require('web3-core-subscriptions');
var ProvidersPackage = require('web3-providers');
var Iban = require('web3-eth-iban').Iban;
var formatters = require('web3-core-helpers').formatters;
var Utils = require('web3-utils');
var MethodPackage = require('web3-core-method');

module.exports = {
    version: version,

    /**
     * Creates the Eth object
     *
     * @method createEth
     *
     * @param {AbstractProviderAdapter|EthereumProvider} provider
     *
     * @returns {Eth}
     */
    createEth: function (provider) {
        var accounts = AccountsPackage.createAccounts(provider);

        return new Eth(
            provider,
            NetPackage.createNetwork(provider),
            ContractPackage,
            accounts,
            PersonalPackage.createPersonal(provider),
            Iban,
            AbiPackage.createAbiCoder(utils),
            ENSPackage.createENS(provider),
            Utils,
            formatters,
            ProvidersPackage,
            SubscriptionsPackage.createSubscriptionsFactory(),
            MethodPackage.createMethodController(),
            new MethodModelFactory(Utils, formatters, accounts)
        );
    }
};
