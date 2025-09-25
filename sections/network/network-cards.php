<section class="container">
	<div style="margin: 1rem">

		<!-- Search Box -->
		<div class="search-box" style="margin:20px 0;">
			<input type="text" id="searchInput" placeholder="Search companies..." style="padding:10px;width:100%;max-width:400px;border:1px solid #ccc;border-radius:5px;">
		</div>

		<!-- Cards Wrapper -->
		<div class="cards-wrapper" id="cardsWrapper">
			<!-- Card 1 -->
			<div class="card network-card" data-name="Global Freight Solutions">
				<div class="network-card-header">
					<div class="avatar-initial">GF</div>
					<h4 class="network-name">Global Freight Solutions</h4>
				</div>
				<div class="network-meta">
					<p><span>Contact:</span> Alice Johnson</p>
					<p><span>Type:</span> Freight forwarder</p>
					<p><span>Country:</span> USA</p>
				</div>
				<p class="network-link"><a href="https://globalfreight.com" target="_blank">https://globalfreight.com</a></p>
			</div>

            			<div class="card network-card" data-name="Global Freight Solutions">
				<div class="network-card-header">
					<div class="avatar-initial">TL</div>
					<h4 class="network-name">Transworld logistics</h4>
				</div>
				<div class="network-meta">
					<p><span>Contact:</span> Bob Smith

</p>
					<p><span>Type:</span> Air freight

</p>
					<p><span>Country:</span> Germany</p>
				</div>
				<p class="network-link"><a href="https://transworldlogistics.com" target="_blank">https://transworldlogistics.com</a></p>
			</div>
            			<div class="card network-card" data-name="Global Freight Solutions">
				<div class="network-card-header">
					<div class="avatar-initial">OC</div>
					<h4 class="network-name">Charlie Lee</h4>
				</div>
				<div class="network-meta">
					<p><span>Contact:</span> Charlie Lee</p>
					<p><span>Type:</span>Ocean freight</p>
					<p><span>Country:</span> China</div>
				<p class="network-link"><a href="https://oceaniccarriers.cn" target="_blank">https://oceaniccarriers.cn</a></p>
			</div>



		</div>



		</div>

		<p id="noResults" style="display:none; margin-top:20px; color:red; font-weight:bold;">No companies found.</p>
	</div>
</section>

<script>
document.getElementById("searchInput").addEventListener("keyup", function() {
	let input = this.value.toLowerCase();
	let cards = document.querySelectorAll(".cards-wrapper .card");
	let found = false;

	cards.forEach(card => {
		let name = card.getAttribute("data-name").toLowerCase();
		if(name.includes(input)) {
			card.style.display = "block";
			found = true;
		} else {
			card.style.display = "none";
		}
	});

	document.getElementById("noResults").style.display = found ? "none" : "block";
});
</script>
