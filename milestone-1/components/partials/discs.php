<div class="container">
    <div class="contentMain">
        <div class="row cards">
            <?php foreach ($discs as $disc) : ?>   
                <div class="col-2">
                    <div class="card">
                        <img src="<?php echo $disc['poster']; ?>" alt="immagine disco musicale">
                        <h2 class="fs-4 fw-bolder"><?php echo $disc['title']; ?></h2>
                        <div class="card-body">
                            <div>
                                <h4><?php echo $disc['author']; ?></h4>
                                <h4><?php echo $disc['year']; ?></h4>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?> 
        </div>
    </div>
</div>