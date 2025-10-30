// Select HTML elements
const pledgeForm = document.getElementById("pledgeForm");
const certificateSection = document.getElementById("certificate");
const pledgeTable = document.getElementById("pledgeTable").querySelector("tbody");
const pledgeCount = document.getElementById("pledgeCount");

let pledgeID = 1;
let totalPledge = 0;
let certificateCount = 1;

// Handle form submit
pledgeForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const state = document.getElementById("state").value.trim();
    const profile = document.getElementById("profile").value;
    const commitments = document.querySelectorAll('input[name="commitment"]:checked');
    const totalCommitments = commitments.length;

    if (!name || !email || !mobile) return alert("Please fill all fields");
    if (totalCommitments === 0) return alert("Select at least 1 pledge");

    // Add to table
    const today = new Date().toLocaleDateString();
    const stars = "⭐".repeat(totalCommitments);

    const row = `
        <tr>
            <td>${pledgeID++}</td>
            <td>${name}</td>
            <td>${today}</td>
            <td>${state}</td>
            <td>${profile}</td>
            <td>${stars}</td>
        </tr>
    `;

    pledgeTable.insertAdjacentHTML("beforeend", row);

    // Update KPI
    totalPledge++;
    pledgeCount.textContent = totalPledge;

    // Send to Google Sheets
    fetch("https://script.google.com/macros/s/AKfycbzO_mIEHIc1lIkiFfUz5Za_P3n4-wWynRo00JRhGd7khnrqbEnwdeHKbNJcuGQtyT04DA/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: totalPledge,
            name, date: today, state, profile, stars
        })
    });

    // Show certificate
    generateCertificate(name, totalCommitments);

    // Reset form
    pledgeForm.reset();
});

// CERTIFICATE FUNCTION
function generateCertificate(name, totalCommitments) {
    const stars = "⭐".repeat(totalCommitments);
    const certID = "DW-2025-" + String(certificateCount).padStart(4, '0');
    certificateCount++;

    document.getElementById("certName").textContent = name;
    document.getElementById("starSection").textContent = stars;
    document.getElementById("certID").textContent = certID;

    certificateSection.style.display = "block";
    certificateSection.scrollIntoView({ behavior: "smooth" });
}
//Download Certificate as PDF
document.getElementById("downloadCert").addEventListener("click", async () => {
  const certElement = document.querySelector(".certificate-box");

  const canvas = await html2canvas(certElement, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("landscape", "pt", "a4");
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  // image ration in pdf
  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * pageWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 20, imgWidth, imgHeight);
  pdf.save(`Climate_Pledge_Certificate_.pdf`);
});

