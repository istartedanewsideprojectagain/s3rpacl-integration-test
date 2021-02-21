Feature:Auth actions
  I will test the auth

  Background:
    Given there is a server and a client
    Given A random a UUID
    Given there is a memberList with 2 members
    Given I am member of the group (Set the JWT)
    Given there is a group
    Given there is an acl for "path" with action "create"
    Given there is a file in "path"

  Scenario: I try to access a file
    When I GET the file for path "path"
    Then I receive a 403 status code

  Scenario: I try to access a file (I can't)
    Given A random a UUID
    Given I am member of the group (Set the JWT)
    When I GET the file for path "path"
    Then I receive a 403 status code
