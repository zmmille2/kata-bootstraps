# Terraform Code Kata

[Terraform](https://www.terraform.io/) is a cloud-agnostic deployment tool.

## Getting started

Make sure you have the Azure CLI installed.
Run `az login`.
Run `az account list` to see the subscriptions you have access to.
Run `az account set -s <SUBSCRIPTION_ID>` to set your account to a given subscription.

Once this is done, run `terraform init`.
Run `terraform plan -out plan.out` to see what terraform plans to change.
To apply the changes, run `terraform apply "plan.out"` as prompted.
NOTE: The changes will fail if the resource group named does not exist.

## The Kata

1. Add a storage account that uses the virtual network provided.
2. Add 5 storage accounts that use the virtual network provided.
3. Generate a variable number of storage accounts.
Put half of the storage accounts in one subnet, and half in another.
