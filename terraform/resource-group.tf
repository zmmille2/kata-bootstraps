# Create a resource group
resource "azurerm_resource_group" "example" {
  name     = "${var.USER_INITIALS}kata"
  location = var.RESOURCE_GROUP_LOCATION
}
