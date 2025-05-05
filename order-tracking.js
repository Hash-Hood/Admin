document.getElementById("tracking-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get input values
    const orderId = document.getElementById("order-id").value;
    const trackingNo = document.getElementById("tracking-no").value;

    // Simulating order details (this would come from localStorage or an API in real-world applications)
    const orderDetails = {
        orderId: orderId,
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "09171234567",
        trackingNo: trackingNo,
        amount: "500"
    };

    // If order details exist, display them in the table
    if (orderDetails) {
        const tbody = document.getElementById("tracking-table-body");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${orderDetails.orderId}</td>
            <td>${orderDetails.name}</td>
            <td>${orderDetails.email}</td>
            <td>${orderDetails.phone}</td>
            <td>${orderDetails.trackingNo}</td>
            <td>Php ${orderDetails.amount}</td>
        `;
        tbody.appendChild(row);
        document.getElementById("tracking-info").style.display = "block"; // Show the tracking info section
    } else {
        alert("Order details not found!");
    }
});
