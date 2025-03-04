/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    Betting: {
      address: "0xf5059a5D33d5853360D16C683c16e67980206f36",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "eventId",
              type: "uint256",
            },
          ],
          name: "claimWinnings",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "eventId",
              type: "uint256",
            },
          ],
          name: "closeBetting",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "uint8",
              name: "numCandidates",
              type: "uint8",
            },
          ],
          name: "createEvent",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "eventCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "events",
          outputs: [
            {
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "uint8",
              name: "numCandidates",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "isOpen",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "resolved",
              type: "bool",
            },
            {
              internalType: "uint8",
              name: "winner",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "eventId",
              type: "uint256",
            },
          ],
          name: "getEventTotalBetsOnCandidate",
          outputs: [
            {
              internalType: "uint256[]",
              name: "",
              type: "uint256[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "eventId",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "candidate",
              type: "uint8",
            },
          ],
          name: "getTotalBetsOnCandidate",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "eventId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "user",
              type: "address",
            },
          ],
          name: "getUserBet",
          outputs: [
            {
              internalType: "uint8",
              name: "candidate",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "eventId",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "candidate",
              type: "uint8",
            },
          ],
          name: "placeBet",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "eventId",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "_winner",
              type: "uint8",
            },
          ],
          name: "resolveEvent",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
