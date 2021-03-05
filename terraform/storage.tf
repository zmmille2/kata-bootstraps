variable "storage_account_names" {
  description = "Names of storage accounts"
  type        = list(string)
  default     = ["tabarlowkata1", "tabarlowkata2", "tabarlowkata3", "tabarlowkata4", "tabarlowkata5"]
}

resource "azurerm_storage_account" "example" {
  count = 5
  # for_each = toset(var.storage_account_names)
  name                     = "tabarlowkata${count.index}"
  account_tier             = "Standard"
  account_replication_type = "LRS"
  resource_group_name      = azurerm_resource_group.example.name
  location                 = azurerm_resource_group.example.location
  network_rules {
    default_action             = "Deny"
    ip_rules                   = ["100.0.0.1"]
    virtual_network_subnet_ids = [azurerm_subnet.example.id]
  }
}
