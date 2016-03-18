Feature: The Salon

    Technological implementation: Full-width scaffold
    Languages: English only

    Contacts:
        Editorial: Chris Jeavans
        Design: James
        Development: Punit & Scott

    Scenario: Landing page (desktop)
        Given I have just landed on the page
        And I am on desktop
        Then I should see a full-width video
        And it should play automatically

    Scenario: Scrolling away from the top video (desktop)
        Given I am on desktop
        And the top video is playing
        When I scroll down
        And the top video is no longer in the viewport
        Then it should be paused

    Scenario: Playing multiple videos
        Given one video is already playing
        When I play a second video
        Then the first video should be paused

    Scenario: Sharetools
        Given I share from the bespoke sharetools
        Then it should be populated with a custom message that depends on what part of the page I am on
