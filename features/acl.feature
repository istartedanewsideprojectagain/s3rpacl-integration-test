Feature: Acl actions
  I will test the acl creation

  Background:
    Given there is a server and a client
    Given there is a memberList with 4 members
    Given there is a group
    Given A random a UUID

  Scenario: I should create a group with members
    When I POST an acl with path "path" and actions "read"
    Then I receive a 200 status code
