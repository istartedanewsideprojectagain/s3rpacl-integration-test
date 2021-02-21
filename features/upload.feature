Feature: Upload actions
  I will test the upload creation

  Background:
    Given there is a server and a client
    Given A random a UUID
    Given there is a memberList with 4 members
    Given I am member of the group (Set the JWT)
    Given there is a group
    Given there is an acl for "path" with action "create"

  Scenario: I should create a group with members
    When I POST a file on path "path"
    Then I receive a 200 status code
