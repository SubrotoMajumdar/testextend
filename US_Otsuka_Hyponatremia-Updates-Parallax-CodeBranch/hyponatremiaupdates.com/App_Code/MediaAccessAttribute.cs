using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Controllers;

/// <summary>
/// The MediaAccessAttribute performs checks for
/// access privileges to the HNU media library
/// </summary>
[AttributeUsage(AttributeTargets.Class|AttributeTargets.Method)]
public class MediaAccessAttribute : AuthorizeAttribute
{
    //TODO: replace this placeholder enumerable with actual access to media items
    private IEnumerable<Object> mediaItems = Enumerable.Empty<Object>();

    hyponatremiaupdatesContainer container = new hyponatremiaupdatesContainer();

    //TODO: replace this message with correct one, store it somewhere else, like a resources file
    private string materialsLockedMessage = "All reportable materials are locked";

    protected override bool IsAuthorized(HttpActionContext actionContext)
    {

        //TODO: replace "Id = 0" with current user's Is
        var currentUserProfile = container.UserProfiles.Find(new { Id = 0 });

        try
        {
            //1. is user logged in?
            var isAuthenticated = base.IsAuthorized(actionContext);
            if (!isAuthenticated)
            {
                //all "reportable materials" are "locked"
                actionContext.Request.Properties["accessStatusMessage"] = materialsLockedMessage;
                return false;
            }
            //2. has users' information been determined to be invalid
            //TODO: check if is valid
            var isUserDataValid = false;
            if (!isUserDataValid)
            {
                //"invalid verification", all "reportable materials" remain "locked"
                actionContext.Request.Properties["accessStatusMessage"] = materialsLockedMessage;
                return false;
            }

            //3. is user's "received value" past the cap amount?
            //TODO: check cap
            var isCapExceeded = false;
            if (isCapExceeded)
            {
                //"Hit cap message", all "reportable materials" remain "locked"
                actionContext.Request.Properties["accessStatusMessage"] = materialsLockedMessage;
                return false;
            }

            //4. is user's "received value" close to cap?
            //TODO: check values
            var isCloseToCap = false;
            if (isCloseToCap)
            {
                //set any necessary values
                //
            }

            //if it passes all the other checks, then the user is authorized to access
            return true;
        }
        //TODO: catch any specific exceptions
        catch {
            //if an error is thrown, return false
            //TODO: throw any necessary exceptions
            //TODO: handle the unauthorized
            return false;
        }
    }

    protected override void HandleUnauthorizedRequest(HttpActionContext actionContext)
    {
        base.HandleUnauthorizedRequest(actionContext);
    }
}