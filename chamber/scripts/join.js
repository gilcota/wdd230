/* JOIN */
function msg() { console.log("asd") };
function showMembershipInfo(membership) {
    const membershipDiv = document.querySelector(".membership-details");
    var info = "";
    var x = window.matchMedia("(min-width: 500px)")

    if (x.matches) {

        switch (membership) {
            case "np":
                info =
                    `
        <ul>
        <li>Total Annual Price: &nbsp<b>$0 USD</b></li>
        <li>4 Vouchers for in-person member networking events</li>
        <li>Invitations to member networking and business events</li>
        </ul>
        `
                break;

            case "bronze":
                info =
                    `
        <ul>
        <li>Total Annual Price: &nbsp<b>$500 USD</b></li>
        <li>6 Vouchers for in-person member networking events</li>
        <li>Invitations to member networking and business events</li>
        <li>Eligible to feature up to 1 company space on the weekly newsletter</li>
        <li>Eligible to serve on our Business Committees and Councils</li>
        </ul>
        `
                break;

            case "silver":
                info =
                    `
        <ul>
        <li>Total Annual Price: &nbsp<b>$750 USD</b></li>
        <li>10 Vouchers for in-person member networking events</li>
        <li>Invitations to member networking and business events</li>
        <li>Eligible to feature up to 2 company spaces on the weekly newsletter</li>
        <li>Eligible to serve on our Business Committees and Councils</li>
        <li>Eligible to lead a Business Committee or Council</li>
        </ul>
        `
                break;

            case "gold":
                info =
                    `
        <ul>
        <li>Total Annual Price: &nbsp<b>$1,000 USD</b></li>
        <li>15 Vouchers for in-person member networking events</li>
        <li>Invitations to member networking and business events</li>
        <li>Eligible to feature up to 3 company space on the weekly newsletter</li>
        <li>Eligible to serve on our Business Committees and Councils</li>
        <li>Eligible to lead a Business Committee or Council</li>
        <li>Eligible for Nomination to Board of Directors</li>
        <li>One-on-One meeting with Chamber CEO</li>
        </ul>
        `
                break;
        }
    }
    membershipDiv.innerHTML = info;
}


/* GET LOCAL DAY */
function getHiddenDate() {
    let dateElement = document.querySelector("#timestamp");
    dateElement.value = new Date();
    console.log(timestamp.value);
};