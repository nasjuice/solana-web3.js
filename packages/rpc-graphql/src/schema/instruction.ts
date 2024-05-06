// *Note: Any integer value inside a transaction instruction must be `BigInt`
// until the following issue is resolved:
// <https://github.com/solana-labs/solana-web3.js/issues/1828>
export const instructionTypeDefs = /* GraphQL */ `
    """
    Transaction instruction interface
    """
    interface TransactionInstruction {
        programId: Address
    }

    """
    Generic transaction instruction
    """
    type GenericInstruction implements TransactionInstruction {
        accounts: [Address]
        data: Base64EncodedBytes
        programId: Address
    }

    """
    AddressLookupTable: CreateLookupTable instruction
    """
    type CreateLookupTableInstruction implements TransactionInstruction {
        programId: Address
        bumpSeed: BigInt # FIXME:*
        lookupTableAccount: Account
        lookupTableAuthority: Account
        payerAccount: Account
        recentSlot: Slot
        systemProgram: Account
    }

    """
    AddressLookupTable: ExtendLookupTable instruction
    """
    type ExtendLookupTableInstruction implements TransactionInstruction {
        programId: Address
        lookupTableAccount: Account
        lookupTableAuthority: Account
        newAddresses: [Address]
        payerAccount: Account
        systemProgram: Account
    }

    """
    AddressLookupTable: FreezeLookupTable instruction
    """
    type FreezeLookupTableInstruction implements TransactionInstruction {
        programId: Address
        lookupTableAccount: Account
        lookupTableAuthority: Account
    }

    """
    AddressLookupTable: DeactivateLookupTable instruction
    """
    type DeactivateLookupTableInstruction implements TransactionInstruction {
        programId: Address
        lookupTableAccount: Account
        lookupTableAuthority: Account
    }

    """
    AddressLookupTable: CloseLookupTable instruction
    """
    type CloseLookupTableInstruction implements TransactionInstruction {
        programId: Address
        lookupTableAccount: Account
        lookupTableAuthority: Account
        recipient: Account
    }

    """
    BpfLoader: Write instruction
    """
    type BpfLoaderWriteInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        bytes: Base64EncodedBytes
        offset: BigInt # FIXME:*
    }

    """
    BpfLoader: Finalize instruction
    """
    type BpfLoaderFinalizeInstruction implements TransactionInstruction {
        programId: Address
        account: Account
    }

    """
    BpfUpgradeableLoader: InitializeBuffer instruction
    """
    type BpfUpgradeableLoaderInitializeBufferInstruction implements TransactionInstruction {
        programId: Address
        account: Account
    }

    """
    BpfUpgradeableLoader: Write instruction
    """
    type BpfUpgradeableLoaderWriteInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        authority: Account
        bytes: Base64EncodedBytes
        offset: BigInt # FIXME:*
    }

    """
    BpfUpgradeableLoader: DeployWithMaxDataLen instruction
    """
    type BpfUpgradeableLoaderDeployWithMaxDataLenInstruction implements TransactionInstruction {
        programId: Address
        authority: Account
        bufferAccount: Account
        clockSysvar: Account
        maxDataLen: BigInt
        payerAccount: Account
        programAccount: Account
        programDataAccount: Account
        rentSysvar: Account
    }

    """
    BpfUpgradeableLoader: Upgrade instruction
    """
    type BpfUpgradeableLoaderUpgradeInstruction implements TransactionInstruction {
        programId: Address
        authority: Account
        bufferAccount: Account
        clockSysvar: Account
        programAccount: Account
        programDataAccount: Account
        rentSysvar: Account
        spillAccount: Account
    }

    """
    BpfUpgradeableLoader: SetAuthority instruction
    """
    type BpfUpgradeableLoaderSetAuthorityInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        authority: Account
        newAuthority: Account
    }

    """
    BpfUpgradeableLoader: SetAuthorityChecked instruction
    """
    type BpfUpgradeableLoaderSetAuthorityCheckedInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        authority: Account
        newAuthority: Account
    }

    """
    BpfUpgradeableLoader: Close instruction
    """
    type BpfUpgradeableLoaderCloseInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        authority: Account
        programAccount: Account
        recipient: Account
    }

    """
    BpfUpgradeableLoader: ExtendProgram instruction
    """
    type BpfUpgradeableLoaderExtendProgramInstruction implements TransactionInstruction {
        programId: Address
        additionalBytes: BigInt
        payerAccount: Account
        programAccount: Account
        programDataAccount: Account
        systemProgram: Account
    }

    """
    SplAssociatedTokenAccount: Create instruction
    """
    type SplAssociatedTokenCreateInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        mint: Account
        source: Account
        systemProgram: Account
        tokenProgram: Account
        wallet: Account
    }

    """
    SplAssociatedTokenAccount: CreateIdempotent instruction
    """
    type SplAssociatedTokenCreateIdempotentInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        mint: Account
        source: Account
        systemProgram: Account
        tokenProgram: Account
        wallet: Account
    }

    """
    SplAssociatedTokenAccount: RecoverNested instruction
    """
    type SplAssociatedTokenRecoverNestedInstruction implements TransactionInstruction {
        programId: Address
        destination: Account
        nestedMint: Account
        nestedOwner: Account
        nestedSource: Account
        ownerMint: Account
        tokenProgram: Account
        wallet: Account
    }

    """
    SplMemo instruction
    """
    type SplMemoInstruction implements TransactionInstruction {
        programId: Address
        memo: String
    }

    """
    SplToken: InitializeMint instruction
    """
    type SplTokenInitializeMintInstruction implements TransactionInstruction {
        programId: Address
        decimals: BigInt # FIXME:*
        freezeAuthority: Account
        mint: Account
        mintAuthority: Account
        rentSysvar: Account
    }

    """
    SplToken: InitializeMint2 instruction
    """
    type SplTokenInitializeMint2Instruction implements TransactionInstruction {
        programId: Address
        decimals: BigInt # FIXME:*
        freezeAuthority: Account
        mint: Account
        mintAuthority: Account
    }

    """
    SplToken: InitializeAccount instruction
    """
    type SplTokenInitializeAccountInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        mint: Account
        owner: Account
        rentSysvar: Account
    }

    """
    SplToken: InitializeAccount2 instruction
    """
    type SplTokenInitializeAccount2Instruction implements TransactionInstruction {
        programId: Address
        account: Account
        mint: Account
        owner: Account
        rentSysvar: Account
    }

    """
    SplToken: InitializeAccount3 instruction
    """
    type SplTokenInitializeAccount3Instruction implements TransactionInstruction {
        programId: Address
        account: Account
        mint: Account
        owner: Account
    }

    """
    SplToken: InitializeMultisig instruction
    """
    type SplTokenInitializeMultisigInstruction implements TransactionInstruction {
        programId: Address
        m: BigInt # FIXME:*
        multisig: Account
        rentSysvar: Account
        signers: [Address]
    }

    """
    SplToken: InitializeMultisig2 instruction
    """
    type SplTokenInitializeMultisig2Instruction implements TransactionInstruction {
        programId: Address
        m: BigInt # FIXME:*
        multisig: Account
        signers: [Address]
    }

    """
    SplToken: Transfer instruction
    """
    type SplTokenTransferInstruction implements TransactionInstruction {
        programId: Address
        amount: BigInt
        authority: Account
        destination: Account
        multisigAuthority: Account
        source: Account
    }

    """
    SplToken: Approve instruction
    """
    type SplTokenApproveInstruction implements TransactionInstruction {
        programId: Address
        amount: BigInt
        delegate: Account
        multisigOwner: Account
        owner: Account
        source: Account
    }

    """
    SplToken: Revoke instruction
    """
    type SplTokenRevokeInstruction implements TransactionInstruction {
        programId: Address
        multisigOwner: Account
        owner: Account
        source: Account
    }

    """
    SplToken: SetAuthority instruction
    """
    type SplTokenSetAuthorityInstruction implements TransactionInstruction {
        programId: Address
        authority: Account
        authorityType: String
        multisigAuthority: Account
        newAuthority: Account
    }

    """
    SplToken: MintTo instruction
    """
    type SplTokenMintToInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        amount: BigInt
        authority: Account
        mint: Account
        mintAuthority: Account
        multisigMintAuthority: Account
    }

    """
    SplToken: Burn instruction
    """
    type SplTokenBurnInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        amount: BigInt
        authority: Account
        mint: Account
        multisigAuthority: Account
    }

    """
    SplToken: CloseAccount instruction
    """
    type SplTokenCloseAccountInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        destination: Account
        multisigOwner: Account
        owner: Account
    }

    """
    SplToken: FreezeAccount instruction
    """
    type SplTokenFreezeAccountInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        freezeAuthority: Account
        mint: Account
        multisigFreezeAuthority: Account
    }

    """
    SplToken: ThawAccount instruction
    """
    type SplTokenThawAccountInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        freezeAuthority: Account
        mint: Account
        multisigFreezeAuthority: Account
    }

    """
    SplToken: TransferChecked instruction
    """
    type SplTokenTransferCheckedInstruction implements TransactionInstruction {
        programId: Address
        amount: BigInt
        authority: Account
        decimals: BigInt # FIXME:*
        destination: Account
        mint: Account
        multisigAuthority: Account
        source: Account
        tokenAmount: BigInt
    }

    """
    SplToken: ApproveChecked instruction
    """
    type SplTokenApproveCheckedInstruction implements TransactionInstruction {
        programId: Address
        delegate: Account
        mint: Account
        multisigOwner: Account
        owner: Account
        source: Account
        tokenAmount: BigInt
    }

    """
    SplToken: MintToChecked instruction
    """
    type SplTokenMintToCheckedInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        authority: Account
        mint: Account
        mintAuthority: Account
        multisigMintAuthority: Account
        tokenAmount: BigInt
    }

    """
    SplToken: BurnChecked instruction
    """
    type SplTokenBurnCheckedInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        authority: Account
        mint: Account
        multisigAuthority: Account
        tokenAmount: BigInt
    }

    """
    SplToken: SyncNative instruction
    """
    type SplTokenSyncNativeInstruction implements TransactionInstruction {
        programId: Address
        account: Account
    }

    """
    SplToken: GetAccountDataSize instruction
    """
    type SplTokenGetAccountDataSizeInstruction implements TransactionInstruction {
        programId: Address
        extensionTypes: [String]
        mint: Account
    }

    """
    SplToken: InitializeImmutableOwner instruction
    """
    type SplTokenInitializeImmutableOwnerInstruction implements TransactionInstruction {
        programId: Address
        account: Account
    }

    """
    SplToken: AmountToUiAmount instruction
    """
    type SplTokenAmountToUiAmountInstruction implements TransactionInstruction {
        programId: Address
        amount: BigInt
        mint: Account
    }

    """
    SplToken: UiAmountToAmount instruction
    """
    type SplTokenUiAmountToAmountInstruction implements TransactionInstruction {
        programId: Address
        mint: Account
        uiAmount: String
    }

    enum SplTokenDefaultAccountState {
        FROZEN
        INITIALIZED
        UNINITIALIZED
    }

    """
    SplToken-2022: InitializeDefaultAccountState instruction
    """
    type SplTokenInitializeDefaultAccountStateInstruction implements TransactionInstruction {
        programId: Address
        accountState: SplTokenDefaultAccountState
        mint: Account
    }

    """
    SplToken-2022: UpdateDefaultAccountState instruction
    """
    type SplTokenUpdateDefaultAccountStateInstruction implements TransactionInstruction {
        programId: Address
        accountState: SplTokenDefaultAccountState
        freezeAuthority: Account
        mint: Account
        multisigFreezeAuthority: Account
        signers: [Address]
    }

    """
    SplToken-2022: InitializeMintCloseAuthority instruction
    """
    type SplTokenInitializeMintCloseAuthorityInstruction implements TransactionInstruction {
        programId: Address
        mint: Account
        newAuthority: Account
    }

    """
    SplToken-2022: InitializePermanentDelegate instruction
    """
    type SplTokenInitializePermanentDelegateInstruction implements TransactionInstruction {
        programId: Address
        delegate: Account
        mint: Account
    }

    """
    SplToken-2022: InitializeGroupPointer instruction
    """
    type SplTokenInitializeGroupPointerInstruction implements TransactionInstruction {
        programId: Address
        authority: Account
        groupAddress: Account
        mint: Account
    }

    """
    SplToken-2022: UpdateGroupPointer instruction
    """
    type SplTokenUpdateGroupPointerInstruction implements TransactionInstruction {
        programId: Address
        authority: Account
        groupAddress: Account
        mint: Account
        multisigAuthority: Account
        signers: [Address]
    }

    """
    SplToken-2022: InitializeGroupMemberPointer instruction
    """
    type SplTokenInitializeGroupMemberPointerInstruction implements TransactionInstruction {
        programId: Address
        authority: Account
        memberAddress: Account
        mint: Account
    }

    """
    SplToken-2022: UpdateGroupMemberPointer instruction
    """
    type SplTokenUpdateGroupMemberPointerInstruction implements TransactionInstruction {
        programId: Address
        authority: Account
        memberAddress: Account
        mint: Account
        multisigAuthority: Account
        signers: [Address]
    }

    """
    SplToken-2022: InitializeMetadataPointer instruction
    """
    type SplTokenInitializeMetadataPointerInstruction implements TransactionInstruction {
        programId: Address
        authority: Account
        metadataAddress: Account
        mint: Account
    }

    """
    SplToken-2022: UpdateMetadataPointer instruction
    """
    type SplTokenUpdateMetadataPointerInstruction implements TransactionInstruction {
        programId: Address
        authority: Account
        metadataAddress: Account
        mint: Account
        multisigAuthority: Account
        signers: [Address]
    }

    """
    SplToken-2022: InitializeTransferFeeConfig instruction
    """
    type SplTokenInitializeTransferFeeConfig implements TransactionInstruction {
        programId: Address
        mint: Account
        transferFeeBasisPoints: Int
        transferFeeConfigAuthority: Account
        withdrawWithheldAuthority: Account
        maximumFee: Int
    }

    """
    SplToken-2022: InitializeTransferHook instruction
    """
    type SplTokenInitializeTransferHookInstruction implements TransactionInstruction {
        programId: Address
        authority: Account
        hookProgramId: Account
        mint: Account
    }

    """
    SplToken-2022: UpdateTransferHook instruction
    """
    type SplTokenUpdateTransferHookInstruction implements TransactionInstruction {
        programId: Address
        authority: Account
        hookProgramId: Account
        mint: Account
        multisigAuthority: Account
        signers: [Address]
    }

    """
    SplToken-2022: EnableCpiGuard instruction
    """
    type SplTokenEnableCpiGuardInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        multisigOwner: Account
        owner: Account
        signers: [Address]
    }

    """
    SplToken-2022: DisableCpiGuard instruction
    """
    type SplTokenDisableCpiGuardInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        multisigOwner: Account
        owner: Account
        signers: [Address]
    }

    """
    SplToken-2022: HarvestWithheldTokensToMint instruction
    """
    type SplTokenHarvestWithheldTokensToMint implements TransactionInstruction {
        programId: Address
        mint: Account
        sourceAccounts: [Address]
    }

    """
    SplToken-2022: WithdrawWithheldTokensFromAccounts instruction
    """
    type SplTokenWithdrawWithheldTokensFromAccounts implements TransactionInstruction {
        programId: Address
        feeRecipient: Account
        mint: Account
        multisigWithdrawWithheldAuthority: Account
        signers: [Address]
        sourceAccounts: [Address]
        withdrawWithheldAuthority: Account
    }

    """
    SplToken-2022: WithdrawWithheldTokensFromMint instruction
    """
    type SplTokenWithdrawWithheldTokensFromMint implements TransactionInstruction {
        programId: Address
        feeRecipient: Account
        mint: Account
        withdrawWithheldAuthority: Account
        multisigWithdrawWithheldAuthority: Account
        signers: [Address]
    }

    """
    SplToken-2022: TransferCheckedWithFee instruction
    """
    type SplTokenTransferCheckedWithFee implements TransactionInstruction {
        programId: Address
        authority: Account
        destination: Account
        feeAmount: TokenAmount
        mint: Account
        source: Account
        tokenAmount: TokenAmount
        multisigAuthority: Account
        signers: [Address]
    }

    """
    SplToken-2022: EnableRequiredMemoTransfers instruction
    """
    type SplTokenEnableRequiredMemoTransfers implements TransactionInstruction {
        programId: Address
        account: Account
        owner: Account
        multisigOwner: Account
        signers: [Address]
    }

    """
    SplToken-2022: DisableRequiredMemoTransfers instruction
    """
    type SplTokenDisableRequiredMemoTransfers implements TransactionInstruction {
        programId: Address
        account: Account
        owner: Account
        multisigOwner: Account
        signers: [Address]
    }

    """
    SplToken-2022: InitializeConfidentialTransferMint instruction
    """
    type SplTokenInitializeConfidentialTransferMint implements TransactionInstruction {
        programId: Address
        auditorElgamalPubkey: Address
        authority: Account
        autoApproveNewAccounts: Boolean
        mint: Account
    }

    """
    SplToken-2022: InitializeInterestBearingConfig instruction
    """
    type SplTokenInitializeInterestBearingConfig implements TransactionInstruction {
        programId: Address
        mint: Account
        rate: Int
        rateAuthority: Account
    }

    """
    SplToken-2022: UpdateInterestBearingConfigRate instruction
    """
    type SplTokenUpdateInterestBearingConfigRate implements TransactionInstruction {
        programId: Address
        mint: Account
        multisigRateAuthority: Account
        newRate: Int
        rateAuthority: Account
        signers: [Address]
    }

    """
    SplToken-2022: ApproveConfidentialTransferAccount instruction
    """
    type SplTokenApproveConfidentialTransferAccount implements TransactionInstruction {
        programId: Address
        account: Account
        confidentialTransferAuditorAuthority: Account
        mint: Account
    }

    """
    SplToken-2022: EmptyConfidentialTransferAccount instruction
    """
    type SplTokenEmptyConfidentialTransferAccount implements TransactionInstruction {
        programId: Address
        account: Account
        instructionsSysvar: Account
        multisigOwner: Account
        owner: Account
        proofInstructionOffset: Int
        signers: [Address]
    }

    """
    SplToken-2022: ConfigureConfidentialTransferAccount instruction
    """
    type SplTokenConfigureConfidentialTransferAccount implements TransactionInstruction {
        programId: Address
        account: Account
        decryptableZeroBalance: String
        maximumPendingBalanceCreditCounter: BigInt
        mint: Account
        multisigOwner: Account
        signers: [Address]
    }

    """
    SplToken-2022: ApplyPendingConfidentialTransferBalance instruction
    """
    type SplTokenApplyPendingConfidentialTransferBalance implements TransactionInstruction {
        programId: Address
        account: Account
        expectedPendingBalanceCreditCounter: BigInt
        multisigOwner: Account
        newDecryptableAvailableBalance: String
        owner: Account
        signers: [Address]
    }

    """
    SplToken-2022: EnableConfidentialTransferConfidentialCredits instruction
    """
    type SplTokenEnableConfidentialTransferConfidentialCredits implements TransactionInstruction {
        programId: Address
        account: Account
        multisigOwner: Account
        owner: Account
        signers: [Address]
    }

    """
    SplToken-2022: DisableConfidentialTransferConfidentialCredits instruction
    """
    type SplTokenDisableConfidentialTransferConfidentialCredits implements TransactionInstruction {
        programId: Address
        account: Account
        multisigOwner: Account
        owner: Account
        signers: [Address]
    }

    """
    SplToken-2022: EnableNonConfidentialTransferConfidentialCredits instruction
    """
    type SplTokenEnableNonConfidentialTransferConfidentialCredits implements TransactionInstruction {
        programId: Address
        account: Account
        multisigOwner: Account
        owner: Account
        signers: [Address]
    }

    """
    SplToken-2022: DisableNonConfidentialTransferConfidentialCredits instruction
    """
    type SplTokenDisableNonConfidentialTransferConfidentialCredits implements TransactionInstruction {
        programId: Address
        account: Account
        multisigOwner: Account
        owner: Account
        signers: [Address]
    }

    # TODO: Extensions!
    # ...

    type Lockup {
        custodian: Account
        epoch: Epoch
        unixTimestamp: BigInt
    }

    """
    Stake: Initialize instruction
    """
    type StakeInitializeInstructionDataAuthorized {
        staker: Account
        withdrawer: Account
    }
    type StakeInitializeInstruction implements TransactionInstruction {
        programId: Address
        authorized: StakeInitializeInstructionDataAuthorized
        lockup: Lockup
        rentSysvar: Account
        stakeAccount: Account
    }

    """
    Stake: Authorize instruction
    """
    type StakeAuthorizeInstruction implements TransactionInstruction {
        programId: Address
        authority: Account
        authorityType: String
        clockSysvar: Account
        custodian: Account
        newAuthority: Account
        stakeAccount: Account
    }

    """
    Stake: DelegateStake instruction
    """
    type StakeDelegateStakeInstruction implements TransactionInstruction {
        programId: Address
        clockSysvar: Account
        stakeAccount: Account
        stakeAuthority: Account
        stakeConfigAccount: Account
        stakeHistorySysvar: Account
        voteAccount: Account
    }

    """
    Stake: Split instruction
    """
    type StakeSplitInstruction implements TransactionInstruction {
        programId: Address
        lamports: Lamports
        newSplitAccount: Account
        stakeAccount: Account
        stakeAuthority: Account
    }

    """
    Stake: Withdraw instruction
    """
    type StakeWithdrawInstruction implements TransactionInstruction {
        programId: Address
        clockSysvar: Account
        destination: Account
        lamports: Lamports
        stakeAccount: Account
        withdrawAuthority: Account
    }

    """
    Stake: Deactivate instruction
    """
    type StakeDeactivateInstruction implements TransactionInstruction {
        programId: Address
        clockSysvar: Account
        stakeAccount: Account
        stakeAuthority: Account
    }

    """
    Stake: SetLockup instruction
    """
    type StakeSetLockupInstruction implements TransactionInstruction {
        programId: Address
        custodian: Account
        lockup: Lockup
        stakeAccount: Account
    }

    """
    Stake: Merge instruction
    """
    type StakeMergeInstruction implements TransactionInstruction {
        programId: Address
        clockSysvar: Account
        destination: Account
        source: Account
        stakeAuthority: Account
        stakeHistorySysvar: Account
    }

    """
    Stake: AuthorizeWithSeed instruction
    """
    type StakeAuthorizeWithSeedInstruction implements TransactionInstruction {
        programId: Address
        authorityBase: Account
        authorityOwner: Account
        authoritySeed: String
        authorityType: String
        clockSysvar: Account
        custodian: Account
        newAuthorized: Account
        stakeAccount: Account
    }

    """
    Stake: InitializeChecked instruction
    """
    type StakeInitializeCheckedInstructionDataAuthorized {
        staker: Account
        withdrawer: Account
    }
    type StakeInitializeCheckedInstruction implements TransactionInstruction {
        programId: Address
        authorized: StakeInitializeCheckedInstructionDataAuthorized
        lockup: Lockup
        rentSysvar: Account
        stakeAccount: Account
    }

    """
    Stake: AuthorizeChecked instruction
    """
    type StakeAuthorizeCheckedInstruction implements TransactionInstruction {
        programId: Address
        authority: Account
        authorityType: String
        clockSysvar: Account
        custodian: Account
        newAuthority: Account
        stakeAccount: Account
    }

    """
    Stake: AuthorizeCheckedWithSeed instruction
    """
    type StakeAuthorizeCheckedWithSeedInstruction implements TransactionInstruction {
        programId: Address
        authorityBase: Account
        authorityOwner: Account
        authoritySeed: String
        authorityType: String
        clockSysvar: Account
        custodian: Account
        newAuthorized: Account
        stakeAccount: Account
    }

    """
    Stake: SetLockupChecked instruction
    """
    type StakeSetLockupCheckedInstruction implements TransactionInstruction {
        programId: Address
        custodian: Account
        lockup: Lockup
        stakeAccount: Account
    }

    """
    Stake: DeactivateDelinquent instruction
    """
    type StakeDeactivateDelinquentInstruction implements TransactionInstruction {
        programId: Address
        referenceVoteAccount: Account
        stakeAccount: Account
        voteAccount: Account
    }

    """
    Stake: Redelegate instruction
    """
    type StakeRedelegateInstruction implements TransactionInstruction {
        programId: Address
        newStakeAccount: Account
        stakeAccount: Account
        stakeAuthority: Account
        stakeConfigAccount: Account
        voteAccount: Account
    }

    """
    System: CreateAccount instruction
    """
    type CreateAccountInstruction implements TransactionInstruction {
        programId: Address
        lamports: Lamports
        newAccount: Account
        owner: Account
        source: Account
        space: BigInt
    }

    """
    System: Assign instruction
    """
    type AssignInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        owner: Account
    }

    """
    System: Transfer instruction
    """
    type TransferInstruction implements TransactionInstruction {
        programId: Address
        destination: Account
        lamports: Lamports
        source: Account
    }

    """
    System: CreateAccountWithSeed instruction
    """
    type CreateAccountWithSeedInstruction implements TransactionInstruction {
        programId: Address
        base: Account
        lamports: Lamports
        owner: Account
        seed: String
        space: BigInt
    }

    """
    System: AdvanceNonceAccount instruction
    """
    type AdvanceNonceAccountInstruction implements TransactionInstruction {
        programId: Address
        nonceAccount: Account
        nonceAuthority: Account
        recentBlockhashesSysvar: Account
    }

    """
    System: WithdrawNonceAccount instruction
    """
    type WithdrawNonceAccountInstruction implements TransactionInstruction {
        programId: Address
        destination: Account
        lamports: Lamports
        nonceAccount: Account
        nonceAuthority: Account
        recentBlockhashesSysvar: Account
        rentSysvar: Account
    }

    """
    System: InitializeNonceAccount instruction
    """
    type InitializeNonceAccountInstruction implements TransactionInstruction {
        programId: Address
        nonceAccount: Account
        nonceAuthority: Account
        recentBlockhashesSysvar: Account
        rentSysvar: Account
    }

    """
    System: AuthorizeNonceAccount instruction
    """
    type AuthorizeNonceAccountInstruction implements TransactionInstruction {
        programId: Address
        newAuthorized: Account
        nonceAccount: Account
        nonceAuthority: Account
    }

    """
    System: UpgradeNonceAccount instruction
    """
    type UpgradeNonceAccountInstruction implements TransactionInstruction {
        programId: Address
        nonceAccount: Account
        nonceAuthority: Account
    }

    """
    System: Allocate instruction
    """
    type AllocateInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        space: BigInt
    }

    """
    System: AllocateWithSeed instruction
    """
    type AllocateWithSeedInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        base: Address
        owner: Account
        seed: String
        space: BigInt
    }

    """
    System: AssignWithSeed instruction
    """
    type AssignWithSeedInstruction implements TransactionInstruction {
        programId: Address
        account: Account
        base: Address
        owner: Account
        seed: String
    }

    """
    System: TransferWithSeed instruction
    """
    type TransferWithSeedInstruction implements TransactionInstruction {
        programId: Address
        destination: Account
        lamports: Lamports
        source: Account
        sourceBase: Address
        sourceOwner: Account
        sourceSeed: String
    }

    """
    Vote: InitializeAccount instruction
    """
    type VoteInitializeAccountInstruction implements TransactionInstruction {
        programId: Address
        authorizedVoter: Account
        authorizedWithdrawer: Account
        clockSysvar: Account
        commission: BigInt # FIXME:*
        node: Account
        rentSysvar: Account
        voteAccount: Account
    }

    """
    Vote: Authorize instruction
    """
    type VoteAuthorizeInstruction implements TransactionInstruction {
        programId: Address
        authority: Account
        authorityType: String
        clockSysvar: Account
        newAuthority: Account
        voteAccount: Account
    }

    """
    Vote: AuthorizeWithSeed instruction
    """
    type VoteAuthorizeWithSeedInstruction implements TransactionInstruction {
        programId: Address
        authorityBaseKey: String
        authorityOwner: Account
        authoritySeed: String
        authorityType: String
        clockSysvar: Account
        newAuthority: Account
        voteAccount: Account
    }

    """
    Vote: AuthorizeCheckedWithSeed instruction
    """
    type VoteAuthorizeCheckedWithSeedInstruction implements TransactionInstruction {
        programId: Address
        authorityBaseKey: String
        authorityOwner: Account
        authoritySeed: String
        authorityType: String
        clockSysvar: Account
        newAuthority: Account
        voteAccount: Account
    }

    type Vote {
        hash: Hash
        slots: [Slot]
        timestamp: BigInt
    }

    """
    Vote: Vote instruction
    """
    type VoteVoteInstruction implements TransactionInstruction {
        programId: Address
        clockSysvar: Account
        slotHashesSysvar: Account
        vote: Vote
        voteAccount: Account
        voteAuthority: Account
    }

    type VoteStateUpdateLockout {
        confirmationCount: BigInt # FIXME:*
        slot: Slot
    }
    type VoteStateUpdate {
        hash: Hash
        lockouts: [VoteStateUpdateLockout]
        root: Slot
        timestamp: BigInt
    }

    """
    Vote: UpdateVoteState instruction
    """
    type VoteUpdateVoteStateInstruction implements TransactionInstruction {
        programId: Address
        hash: Hash
        voteAccount: Account
        voteAuthority: Account
        voteStateUpdate: VoteStateUpdate
    }

    """
    Vote: UpdateVoteStateSwitch instruction
    """
    type VoteUpdateVoteStateSwitchInstruction implements TransactionInstruction {
        programId: Address
        hash: Hash
        voteAccount: Account
        voteAuthority: Account
        voteStateUpdate: VoteStateUpdate
    }

    """
    Vote: CompactUpdateVoteState instruction
    """
    type VoteCompactUpdateVoteStateInstruction implements TransactionInstruction {
        programId: Address
        hash: Hash
        voteAccount: Account
        voteAuthority: Account
        voteStateUpdate: VoteStateUpdate
    }

    """
    Vote: CompactUpdateVoteStateSwitch instruction
    """
    type VoteCompactUpdateVoteStateSwitchInstruction implements TransactionInstruction {
        programId: Address
        hash: Hash
        voteAccount: Account
        voteAuthority: Account
        voteStateUpdate: VoteStateUpdate
    }

    """
    Vote: Withdraw instruction
    """
    type VoteWithdrawInstruction implements TransactionInstruction {
        programId: Address
        destination: Account
        lamports: Lamports
        voteAccount: Account
        withdrawAuthority: Account
    }

    """
    Vote: UpdateValidatorIdentity instruction
    """
    type VoteUpdateValidatorIdentityInstruction implements TransactionInstruction {
        programId: Address
        newValidatorIdentity: Account
        voteAccount: Account
        withdrawAuthority: Account
    }

    """
    Vote: UpdateCommission instruction
    """
    type VoteUpdateCommissionInstruction implements TransactionInstruction {
        programId: Address
        commission: BigInt # FIXME:*
        voteAccount: Account
        withdrawAuthority: Account
    }

    """
    Vote: VoteSwitch instruction
    """
    type VoteVoteSwitchInstruction implements TransactionInstruction {
        programId: Address
        clockSysvar: Account
        hash: Hash
        slotHashesSysvar: Account
        vote: Vote
        voteAccount: Account
        voteAuthority: Account
    }

    """
    Vote: AuthorizeChecked instruction
    """
    type VoteAuthorizeCheckedInstruction implements TransactionInstruction {
        programId: Address
        authority: Account
        authorityType: String
        clockSysvar: Account
        newAuthority: Account
        voteAccount: Account
    }
`;
